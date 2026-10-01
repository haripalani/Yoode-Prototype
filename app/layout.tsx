import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import { FeaturesBar } from "@/components/FeaturesBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoode | High-Fashion Editorial E-Commerce",
  description: "Precision print-on-demand meets elevated streetwear silhouettes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <FeaturesBar />
        {children}
      </body>
    </html>
  );
}
