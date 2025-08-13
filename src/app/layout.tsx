import type { Metadata } from 'next';
import { Special_Gothic_Expanded_One } from 'next/font/google';
import './globals.css';

const specialGothicExpandedOne = Special_Gothic_Expanded_One({
  variable: '--font-special-gothic-expanded-one',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Meus links - Vini Hebert',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${specialGothicExpandedOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
