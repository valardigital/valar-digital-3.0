import type { Metadata } from "next";
import Header from './components/layout/header';
import Footer from './components/layout/Footer';
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.css";

const neueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valar Digital",
  description: "Beyond an Agency, We're the Team That Builds Beside You.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
