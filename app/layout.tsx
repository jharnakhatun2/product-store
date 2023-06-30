"use client";
import "./globals.css";
import Footer from "./footer";
import Providers from "./provider";
import Navbar from "./navbar";
import { store } from "@/store/store";
import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: "Product Store",
  description: "Created by Jharna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers store={store}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
