import type { Metadata } from "next";
import "./globals.css";
import HeroProvider from "@/providers/hero-provider";
import { Lato } from "next/font/google";
import MainNavbar from "@/components/page-components/navbar";
import Footer from "@/components/page-components/footer";
import QueryProvider from "@/providers/query-provider";
import MegaMenuProvider from "@/providers/mega-menu";
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "MGC Freight | Premium Logistics & Freight Shipping",
  description: "MGC Freight is your trusted freight broker and logistics partner. We offer end-to-end logistics solutions, including LTL, truckload, courier, and specialized freight services across North America.",

  keywords: ["freight shipping", "logistics company", "MGC Freight", "cargo shipping", "supply chain management", "freight broker", "transportation services", "shipping solutions", "truckload shipping", "LTL shipping"],
  openGraph: {
    title: "MGC Freight | Premium Logistics & Freight Shipping",
    description: "Streamline your supply chain with MGC Freight. Get real-time quotes and book shipments easily.",
    type: "website",
    locale: "en_US",
    siteName: "MGC Freight",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGC Freight | Logistics & Shipping",
    description: "Fast, reliable freight shipping solutions for your business.",
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
      </body>
    </html>
  );
}
