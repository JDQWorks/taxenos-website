import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taxenos',
  description: 'Tax technology consulting and SaaS tooling.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}