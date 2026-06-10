import type { Metadata } from "next";
import "./globals.css";
// import Script from "next/script";
import HeroProvider from "@/providers/hero-provider";
import { Lato } from "next/font/google";
import MainNavbar from "@/components/page-components/navbar";
import Footer from "@/components/page-components/footer";
import QueryProvider from "@/providers/query-provider";
import MegaMenuProvider from "@/providers/mega-menu";
import { ToastContainer } from 'react-toastify';

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased bg-grid bg-base-gridBg`}>
        <HeroProvider>
          <QueryProvider>
            <MegaMenuProvider>
              <MainNavbar />
              <div className={` mt-8`}>{children}</div>
              <Footer />
              <ToastContainer />
            </MegaMenuProvider>
          </QueryProvider>
        </HeroProvider>
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H7Y1TXGZ4R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H7Y1TXGZ4R');
          `}
        </Script> */}
      </body>
    </html>
  );
}
