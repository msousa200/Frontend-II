import type { Metadata } from "next";
import { Frank_Ruhl_Libre } from 'next/font/google';
import './globals.css';

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Watch Store',
  description: 'Your premium watch store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={frankRuhlLibre.className}>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
