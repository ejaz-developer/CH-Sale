import User from '../models/user.models.js';
import { Webhook } from 'svix';

// Webhook handler for Clerk events
export const handleClerkWebhook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env');
  }

  // Get the headers
  const svix_id = req.headers['svix-id'];
  const svix_timestamp = req.headers['svix-timestamp'];
  const svix_signature = req.headers['svix-signature'];

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ error: 'Error occurred -- no svix headers' });
  }

  // Get the body
  const payload = JSON.stringify(req.body);
  const body = req.body;

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(payload, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return res.status(400).json({ error: 'Error occurred while verifying webhook' });
  }

  // Handle the webhook
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  try {
    switch (eventType) {
      case 'user.created':
        await handleUserCreated(evt.data);
        res.status(201).json({ message: 'User created successfully' });
        break;
      case 'user.updated':
        await handleUserUpdated(evt.data);
        res.status(200).json({ message: 'User updated successfully' });
        break;
      case 'user.deleted':
        await handleUserDeleted(evt.data);
        res.status(200).json({ message: 'User deleted successfully' });
        break;
      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    return res.status(200).json({ message: 'Webhook processed successfully' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({ error: 'Internal server error processing webhook' });
  }
};

// Handle user creation
const handleUserCreated = async (userData) => {
  try {
    const { id, email_addresses, first_name, last_name, username, image_url } = userData;

    // Get primary email
    const primaryEmail = email_addresses.find(
      (email) => email.id === userData.primary_email_address_id,
    );

    const newUser = new User({
      clerkId: id,
      email: primaryEmail?.email_address || '',
      firstName: first_name || '',
      lastName: last_name || '',
      username: username || `user_${id.slice(-8)}`,
      avatar: image_url || '',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newUser.save();
    console.log('User created successfully:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Handle user update
const handleUserUpdated = async (userData) => {
  try {
    const { id, email_addresses, first_name, last_name, username, image_url } = userData;

    // Get primary email
    const primaryEmail = email_addresses.find(
      (email) => email.id === userData.primary_email_address_id,
    );

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: id },
      {
        email: primaryEmail?.email_address || '',
        firstName: first_name || '',
        lastName: last_name || '',
        username: username || `user_${id.slice(-8)}`,
        avatar: image_url || '',
        updatedAt: new Date(),
      },
      { new: true, upsert: true },
    );

    console.log('User updated successfully:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Handle user deletion
const handleUserDeleted = async (userData) => {
  try {
    const { id } = userData;
    const deletedUser = await User.findOneAndDelete({ clerkId: id });
    if (deletedUser) {
      console.log('User deleted successfully:', deletedUser);
    } else {
      console.log('User not found for deletion:', id);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
