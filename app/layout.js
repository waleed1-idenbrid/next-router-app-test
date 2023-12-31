import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import awsmobile from '@/src/aws-exports';
import { Amplify } from 'aws-amplify';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  Amplify.configure(awsmobile);
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
