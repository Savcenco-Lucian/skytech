import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"], // Optional: specify weights
});

export const metadata = {
  title: "SkyTech - Creare Site-uri Web Profesionale și Design Personalizat",
  description: "SkyTech dezvoltă site-uri web personalizate, cu design modern și soluții eficiente de marketing digital care generează vânzări și cresc vizibilitatea afacerii tale pe online.",
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
