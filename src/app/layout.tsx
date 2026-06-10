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

export const metadata: Metadata = {
  title: "MGC Freight | Freight Brokerage Services Canada & USA | LTL, FTL, Courier & More",
  description: "MGC Freight is a trusted freight brokerage based in Ontario offering LTL shipping, FTL truckload, courier services, cross-border freight, and fulfillment across Canada and the US. Get a free freight quote today.",

  keywords: ["freight shipping", "logistics company", "MGC Freight", "cargo shipping", "supply chain management", "freight broker", "transportation services", "shipping solutions", "truckload shipping", "LTL shipping"],
  openGraph: {
    title: "MGC Freight | Freight Brokerage Services Canada & USA | LTL, FTL, Courier & More",
    description: "MGC Freight is a trusted freight brokerage based in Ontario offering LTL shipping, FTL truckload, courier services, cross-border freight, and fulfillment across Canada and the US. Get a free freight quote today.",
    type: "website",
    locale: "en_US",
    siteName: "MGC Freight",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGC Freight | Freight Brokerage Services Canada & USA | LTL, FTL, Courier & More",
    description: "MGC Freight is a trusted freight brokerage based in Ontario offering LTL shipping, FTL truckload, courier services, cross-border freight, and fulfillment across Canada and the US. Get a free freight quote today.",
  },
};

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
