import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import WhatsAppButton from '@/components/WhatsAppButton';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GreekFit — Wear the Sun.',
  description:
    'Premium fitness wear inspired by Mediterranean light and Brazilian movement. Crafted for those who move with intention.',
  keywords: 'premium fitness wear, legging, top, conjunto fitness, roupas fitness premium',
  openGraph: {
    title: 'GreekFit — Wear the Sun.',
    description: 'Mediterranean light. Brazilian energy. Apple-level precision.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#F5F1E8] text-[#1A1A1A] antialiased">
        <CartProvider>
          <Header />
          <CartDrawer />
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
