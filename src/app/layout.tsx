import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import StoreProvider from "./StoreProviders";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets:['latin'],
  display:'swap',
})

export const metadata: Metadata = {
  title: "Brando London",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <StoreProvider>
          {children}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
