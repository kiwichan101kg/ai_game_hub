import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Game Hub",
  description:
    "AI Game Hub is dedicated to providing innovative and exciting AI-powered games. Our mission is to push the boundaries of gaming through the use of artificial intelligence, offering unique and engaging experiences for players of all ages. Join us on this journey to explore the future of gaming!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
