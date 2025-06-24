import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Great_Vibes, Poppins } from "next/font/google";
import "../styles/globals.scss";
import MobileMenu from "./MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seun & Lateefah - Wedding",
  description:
    "Join us in celebrating our love story. Seun & Lateefah are getting married!",
  icons: {
    icon: "Favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${poppins.variable}`}
      >
        <MobileMenu />
        {children}
      </body>
    </html>
  );
}
