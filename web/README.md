# CH Sale - Web POS Application

A modern, responsive web application for the CH Sale Point of Sale system built with React, Vite, and Tailwind CSS.

## Features

- **Modern Landing Page** - Attractive landing page with gradient backgrounds and animations
- **Authentication** - Secure login/signup with Clerk integration
- **Dashboard** - User dashboard with account overview and quick actions
- **Pricing Plans** - Flexible pricing plans with monthly/yearly billing options
- **Profile Management** - Comprehensive user profile and account settings
- **Desktop Integration** - API key management and device connection for desktop app sync
- **Responsive Design** - Fully responsive across all device sizes
- **Custom Theme** - Consistent color palette using charcoal, persian, saffron, sandy, and burnt colors

## Theme Colors

The application uses a carefully crafted color palette:

- **Charcoal** (#264653) - Primary dark color with variations (darker: #1a2f36, darkest: #0f1c21)
- **Persian** (#2a9d8f) - Primary accent color for buttons and highlights
- **Saffron** (#e9c46a) - Secondary accent color for gradients
- **Sandy** (#f4a261) - Tertiary accent color
- **Burnt** (#e76f51) - Additional accent color

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Clerk configuration:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

## Pages

- **/** - Landing page with product overview and features
- **/sign-in** - User authentication (login)
- **/sign-up** - User registration
- **/dashboard** - Main user dashboard
- **/plans** - Pricing and subscription plans
- **/profile** - User profile and account settings
- **/integration** - Desktop app integration and API management

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Clerk** - Authentication and user management
- **React Router** - Client-side routing
- **React Icons** - Icon library

## Design System

The application follows a modern glass morphism design with:

- **Gradient backgrounds** - Multi-layer radial gradients for depth
- **Glass effects** - Backdrop blur and transparency for modern UI
- **Animated particles** - Subtle floating elements for visual interest
- **Responsive grid layouts** - Flexible layouts that work on all screen sizes
- **Consistent spacing** - 8px grid system for harmony
- **Typography hierarchy** - Clear heading and text size relationships

## Development

The application is built with modern React patterns:

- **Functional components** with hooks
- **Client-side routing** with React Router
- **Responsive design** with Tailwind CSS
- **Custom animations** and transitions
- **Reusable components** and consistent styling

## Contributing

1. Follow the existing code style and component patterns
2. Use the established color palette and design system
3. Ensure responsive design across all screen sizes
4. Test thoroughly before submitting changes
