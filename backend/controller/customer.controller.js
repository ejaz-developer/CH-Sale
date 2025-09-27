import { getAuth } from '@clerk/express';
import User from '../models/user.models';
import Customer from '../models/customer.models';

export const createCustomer = async (req, res) => {
  const { name, email, phone, storeId, address } = req.body;

  if (!name || !storeId || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const customer = await Customer.create({
      name,
      email,
      phone,
      store: storeId,
      address,
    });
    if (!customer) {
      return res.status(400).json({ message: 'Failed to create customer' });
    }
    return res.status(201).json({ message: 'Customer created successfully', customer });
  } catch (error) {
    console.error('Error creating customer:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Customer with this email or phone already exists.' });
    }
  }
};

export const getCustomers = async (req, res) => {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(400).json({ message: 'Unauthorized.' });
  }
  try {
    const customers = await Customer.find({ storeOwner: userId });
    if (!customers) {
      return res.status(404).json({ message: 'No customers found' });
    }
    return res.status(200).json({ message: 'Customers fetched successfully!', data: customers });
  } catch (e) {
    console.log('Error occurred', e.error);
  }
};

export const getCustomerById = async (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    return res.status(400).json({ message: 'No customerId found' });
  }
  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'No customers found' });
    }
    return res.status(200).json({ message: 'Customer successfully found.', data: customer });
  } catch (error) {
    console.error('Error occurred', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Customer with this email already exists.' });
    }
  }
};

export const updateCustomer = async (req, res) => {
  const { customerId } = req.params;
  const { name, email, phone, storeId, address } = req.body;
  if (!name || !email || !phone || !storeId || !address) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  if (!customerId) {
    return res.status(400).json({ message: 'No customerId found' });
  }
  try {
    const updateCustomer = await Customer.findOneAndUpdate(customerId, {
      name: name,
      email: email,
      phone: phone,
      storeId: storeId,
      address: address,
    });
    if (!updateCustomer) {
      return res.status(404).json({ message: 'No customerId found' });
    }
  } catch (error) {
    console.error('Error occurred', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Customer with this email already exists.' });
    }
  }
};

export const deleteCustomer = async (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    return res.status(400).json({ message: 'No customerId found' });
  }
  try {
    const deleteCustomer = await Customer.findOneAndDelete(customerId);
    if (!deleteCustomer) {
      return res.status(404).json({ message: 'No customerId found' });
    }
    return res.status(200).json({ message: 'Customer successfully deleted.' });
  } catch (error) {
    console.error('Error occurred', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Customer with this email already exists.' });
    }
  }
};
