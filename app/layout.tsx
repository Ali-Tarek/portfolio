import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import { ReactNode } from "react";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ali Tarek | Software Engineer",
  description:
    "Ali Tarek's personal website showcasing his work and skills as a software engineer.",
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} antialiased h-screen  overflow-x-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px]  px-15px mx-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
