import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WATT — Get rewarded for power.",
  description:
    "Submit your electricity bill. Get rewarded by WATT. Hold $WATT to unlock a higher reward rate.",
  openGraph: {
    title: "WATT — Get rewarded for power.",
    description:
      "Submit your electricity bill. Get rewarded by WATT. Hold $WATT to unlock a higher reward rate.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WATT — Get rewarded for power.",
    description: "Submit your electricity bill. Get rewarded by WATT.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
