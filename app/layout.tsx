import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ムサトクAIクラブ",
  description:
    "今のAIで何ができるか、一緒に知っていく場をつくりました。院内職員向けAI活用事例の共有クラブ。",
  robots: "noindex, nofollow",
  openGraph: {
    title: "ムサトクAIクラブ",
    description: "今のAIで何ができるか、一緒に知っていく場をつくりました。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
