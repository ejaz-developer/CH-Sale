// Default metadata for auth pages
export const metadata = {
  title: 'Authentication - CHPOS',
  description:
    'Sign in or sign up for CHPOS - the powerful point-of-sale system for modern businesses.',
  keywords:
    'CHPOS authentication, POS login, point of sale system, business management, secure login',
  robots: 'index, follow',
  openGraph: {
    title: 'Authentication - CHPOS',
    description:
      'Sign in or sign up for CHPOS - the powerful point-of-sale system for modern businesses.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authentication - CHPOS',
    description: 'Sign in or sign up for CHPOS - the powerful point-of-sale system.',
  },
};

export default function AuthLayout({ children }) {
  return <>{children}</>;
}
