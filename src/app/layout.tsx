import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// components
import HeaderWrapper from "@/components/layout/header/HeaderWrapper";
import FooterWrapper from "@/components/layout/footer/FooterWrapper";
import { Spin } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Chapter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  if (!children) return <Spin fullscreen />;

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderWrapper /> */}
        {children}
        {/* <FooterWrapper /> */}
      </body>
    </html>
  );
}
