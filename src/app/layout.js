import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"], // Optional: specify weights
});

export const metadata = {
  title: "SkyTech - Elaborăm site-uri moderne și magazine online care generează vînzări",
  description: "Dezvoltăm site-uri web personalizate, design modern și soluții eficiente de marketing digital care îți cresc vizibilitatea pe online.",
};


export default function RootLayout({ children }) {
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
