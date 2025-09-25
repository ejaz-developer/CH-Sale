import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { dark } from '@clerk/themes';
import { Toaster } from 'react-hot-toast';
import StoreProvider from '@/components/StoreProvider';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'CHSALE - Modern Point of Sale System',
  description: 'A modern point of sale system for your business',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: 'rgb(17, 24, 39)',
          },
        }}
      >
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <StoreProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </StoreProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
