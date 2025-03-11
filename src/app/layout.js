'use client'

import { Montserrat } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"], // Optional: specify weights
});



export default function RootLayout({ children }) {

  useEffect(() => {
    // Verifică dacă site-ul este în producție înainte de a încărca scriptul
    if (process.env.NODE_ENV === 'production') {
      // Creează elementul script pentru Google Analytics
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CWLJ217GX8';
      script.async = true;
      document.head.appendChild(script);  // Plasează scriptul în <head> pentru încărcare rapidă

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-CWLJ217GX8');
      };
    }
  }, []);

  return (
    <html lang="ro">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
