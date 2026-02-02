import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import StoreProvider from "./StoreProviders";
import Script from "next/script";
import { headers } from "next/headers";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets:['latin'],
  display:'swap',
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: {
    default: "Brando London - Premium Fashion & Accessories",
    template: "%s | Brando London",
  },
  description: "Discover premium fashion and accessories at Brando London. Shop our latest collections of clothing, bags, and accessories for men and women.",
  keywords: ["fashion", "clothing", "accessories", "luxury", "brando london", "premium fashion"],
  authors: [{ name: "Brando London" }],
  creator: "Brando London",
  publisher: "Brando London",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brandolondon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brando London - Premium Fashion & Accessories",
    description: "Discover premium fashion and accessories at Brando London. Shop our latest collections of clothing, bags, and accessories for men and women.",
    url: "https://brandolondon.com",
    siteName: "Brando London",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brando London",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brando London - Premium Fashion & Accessories",
    description: "Discover premium fashion and accessories at Brando London. Shop our latest collections of clothing, bags, and accessories for men and women.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersList = await headers();

  // Vercel / Edge providers
  const country =
  headersList.get("x-vercel-ip-country") ||
  headersList.get("cf-ipcountry") ||
  "GB";
  
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        {/* Google Ads / Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17861181730"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17861181730');
          `}
        </Script>
      </head>
      <body
        data-country={country}
        className={`${outfit.className} antialiased overflow-x-hidden`}
      >
        <StoreProvider>
          {children}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
