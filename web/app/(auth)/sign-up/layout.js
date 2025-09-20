// Metadata for Sign Up page
export const metadata = {
  title: 'Sign Up for CHPOS - Free POS System Trial',
  description:
    'Start your free CHPOS trial today. Join 10,000+ businesses using our powerful point-of-sale system with real-time analytics, inventory management, and secure payments.',
  keywords:
    'CHPOS sign up, free POS trial, point of sale system, retail software, inventory management, sales tracking, business growth, POS registration, free trial',
  robots: 'index, follow',
  openGraph: {
    title: 'Sign Up for CHPOS - Free POS System Trial',
    description:
      'Start your free CHPOS trial today. Join thousands of businesses using our powerful point-of-sale system with real-time analytics and secure payments.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Up for CHPOS - Free POS System Trial',
    description:
      'Start your free CHPOS trial today. Powerful point-of-sale system with real-time analytics.',
  },
};

export default function SignUpLayout({ children }) {
  return children;
}
