import type { Metadata } from "next";
import "./globals.css";
import HeroProvider from "@/providers/hero-provider";
import { Lato } from "next/font/google"
import MainNavbar from "@/components/page-components/navbar";


export const metadata: Metadata = {
  title: "Mokal",
  description: "Mokal Web",
};


const lato = Lato({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased bg-grid bg-base-gridBg`}
      >
        <HeroProvider>
          <MainNavbar />
          <div className={` mt-8`}>
            {children}
          </div>
        </HeroProvider>
      </body>
    </html>
  );
}
