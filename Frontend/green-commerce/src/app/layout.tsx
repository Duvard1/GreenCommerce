import type { Metadata } from "next";
import { Quicksand, Unbounded, Playfair_Display } from "next/font/google";
import "./globals.css";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export const metadata: Metadata = {
  title: "GreenCommerce",
  description: "Marketplace sostenible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${quicksand.variable} antialiased min-h-screen flex flex-col`}        >
        <main className="flex-grow">{children}</main>
        
      </body>
    </html>
  );
}

