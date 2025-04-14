import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Add this import
import Footer from "@/components/Footer"; // Recommended to add footer too

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pranvi Building Solutions | Steel Structure Specialists",
  description: "Premium steel structure and prefabricated building solutions for industrial, commercial and residential projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white text-gray-800 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header /> {/* Add Header here */}
          <main className="flex-grow"> {/* Main content area */}
            {children}
          </main>
          <Footer /> {/* Recommended to add footer */}
        </div>
      </body>
    </html>
  );
}