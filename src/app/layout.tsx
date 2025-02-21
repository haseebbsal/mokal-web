import type { Metadata } from "next";
import "./globals.css";
import HeroProvider from "@/providers/hero-provider";
import { Lato } from "next/font/google"
import MainNavbar from "@/components/page-components/navbar";
import Footer from "@/components/page-components/footer";
import QueryProvider from "@/providers/query-provider";






export const metadata: Metadata = {
  title: "Mokal",
  description: "Mokal Web",
};


const lato = Lato({
  weight: '400',
  subsets: ['latin']
})

export default async function RootLayout({
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
          <QueryProvider>
            <MainNavbar />
            <div className={` mt-8`}>
              {children}
            </div>
            <Footer />
          </QueryProvider>
        </HeroProvider>
      </body>
    </html>
  );
}
