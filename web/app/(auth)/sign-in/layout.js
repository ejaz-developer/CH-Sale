// Metadata for Sign In page
export const metadata = {
  title: 'Sign In to CHPOS - Access Your POS Dashboard',
  description:
    'Sign in to your CHPOS account to access your powerful point-of-sale dashboard. Manage inventory, process sales, and track analytics with bank-grade security.',
  keywords:
    'CHPOS sign in, POS login, point of sale dashboard, retail management, inventory tracking, sales analytics, business dashboard, secure login',
  robots: 'index, follow',
  openGraph: {
    title: 'Sign In to CHPOS - Access Your POS Dashboard',
    description:
      'Sign in to your CHPOS account to access your powerful point-of-sale dashboard with real-time analytics and secure payment processing.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign In to CHPOS - Access Your POS Dashboard',
    description:
      'Sign in to your CHPOS account to access your powerful point-of-sale dashboard with real-time analytics.',
  },
};

export default function SignInLayout({ children }) {
  return children;
}
