import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./_componets/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sympos2k25",
  description: "Periyar University Symposium 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* Sidebar + Main Layout */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />
          <main className=" flex flex-1 lg:ml-[240px] ml-[70px] justify-center items-center overflow-y-hidden
           p-2">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
