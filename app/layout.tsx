import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroVariantProvider } from '@/context/HeroVariantContext';
import HeroVariantSwitcher from '@/components/HeroVariantSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flipit - Independent Reviews on Any Page',
  description: 'Independent reviews and warnings, on the page you\'re viewing. No separate website. No search required.',
  keywords: ['reviews', 'browser extension', 'consumer protection', 'scam alerts', 'website trust'],
  openGraph: {
    title: 'Flipit - Independent Reviews on Any Page',
    description: 'Independent reviews and warnings, on the page you\'re viewing.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroVariantProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <HeroVariantSwitcher />
        </HeroVariantProvider>
      </body>
    </html>
  );
}
