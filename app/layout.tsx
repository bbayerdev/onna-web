import type { Metadata } from "next";
import "./globals.css";

import {Inter} from 'next/font/google'
const inter = Inter({ subsets: ["latin"], weight: ['200', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Onna",
  description: "tcc web onna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body>
        <div className={inter.className}>
          {children}
        </div>
      </body>
    </html>
  );
}
