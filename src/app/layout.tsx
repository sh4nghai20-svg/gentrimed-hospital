import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContentProvider } from '@/context/ContentContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Gentrimed Hospital | Compassionate Healthcare',
  description:
    'Gentrimed Hospital provides comprehensive healthcare services with expert doctors, advanced technology, and 24/7 emergency care. Your trusted partner in health and wellness.',
  keywords:
    'hospital, healthcare, doctors, medical services, emergency care, cardiology, pediatrics',
  openGraph: {
    title: 'Gentrimed Hospital | Compassionate Healthcare',
    description: 'Excellence in healthcare with modern medical facilities',
    type: 'website',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContentProvider>
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}
