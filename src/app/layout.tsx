import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Provider from "@/components/Provider";


export const metadata: Metadata = {
  title: "JuPlash",
  description: "A simple unsplash images display app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`mulish-font antialiased`}
      >
        <Provider>
        <Nav />
        {children}
        
       <Footer />
       </Provider>
      </body>
    </html>
  );
}
