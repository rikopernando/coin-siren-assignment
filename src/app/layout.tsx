import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

import { ErrorBoundary } from '@/components/ErrorBoundary';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['system-ui', 'sans-serif'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Coin Siren - 최고의 외국인 인재 채용 서비스',
  description:
    '법률 및 인사관리 부담없이 1주일 이내에 원격으로 외국인 인재를 채용해보세요. 해외 개발자, 마케터, 디자이너 등 다양한 직군의 전문가를 만나보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} ${poppins.className} antialiased`}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
