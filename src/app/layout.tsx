import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hii dev",
  description:
    "hii-dev は、情報系専門学生である私のスキルとプロジェクトを紹介するポートフォリオサイトです。Next.jsをベースに開発を行い、自身のプロフィール、制作実績、技術スタック、活動などを整理し、閲覧者にわかりやすく伝える構成にしています。",
  openGraph: {
    title: "hii dev",
    description:
      "情報系専門学生のポートフォリオサイト。Next.js, TypeScript, Tailwind CSSで構築。",
    url: "https://hiidev.vercel.app",
    siteName: "hii dev",
    images: [
      {
        url: "https://hiidev.vercel.app/ogp.svg",
        width: 1200,
        height: 630,
        alt: "hii dev OGP Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hii dev",
    description:
      "情報系専門学生のポートフォリオサイト。Next.js, TypeScript, Tailwind CSSで構築。",
    images: ["https://hiidev.vercel.app/ogp.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="fixed top-0 w-full z-50">
            <Header />
          </div>
          <main>{children}</main>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
