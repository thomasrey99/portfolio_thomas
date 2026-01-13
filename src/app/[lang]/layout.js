import Header from "@/components/header";
import "./globals.css";
import { NextUiProvider } from "@/context/NextUiProvider";
import { Source_Sans_3 } from "next/font/google";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSelector from "@/components/traduction";
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weights: ["400", "600", "900"],
});
export const metadata = {
  title: "Thomas Rey WD",
  description: "web developer portfolio thomas rey",
};

export default async function RootLayout({ children, params }) {
  const {lang}=await params;
  return (
    <html lang={lang}>
      <body className={`${sourceSans.className}`}>
        <NextUiProvider>
            <Header language={lang}/>
            <LanguageSelector/>
            {children}
            <Footer language={lang}/>
        </NextUiProvider>
      </body>
    </html>
  );
}
