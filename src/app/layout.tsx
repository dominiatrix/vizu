import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Provider from "@/components/Provider";


export const metadata: Metadata = {
  title: "Vizu",
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
        <script defer src="https://cloud.umami.is/script.js" data-website-id="a1e2c7fc-7f4c-456d-a4e1-44a620834b10"></script>
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
