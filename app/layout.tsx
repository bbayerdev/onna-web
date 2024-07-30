import type { Metadata } from "next";
import "./globals.css";

//fontes:
import { Yanone_Kaffeesatz, Open_Sans } from "next/font/google";
const yanone = Yanone_Kaffeesatz({ subsets: ["latin"], weight: ['200', '400', '500', '600'] });
const opens = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '500'] })
export {opens}

export const metadata: Metadata = {
  title: "Landing page",
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
        <div className={yanone.className}>
          {children}
        </div>
      </body>
    </html>
  );
}
