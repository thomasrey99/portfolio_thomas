import Header from "@/components/header";
import "./globals.css";
import { NextUiProvider } from "@/context/NextUiProvider";
import { Source_Sans_3 } from "next/font/google";
import Footer from "@/components/footer";
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weights: ["400", "600", "900"],
});
export const metadata = {
  title: "Thomas Rey WD",
  description: "web developer portfolio thomas rey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className}`}>
        <NextUiProvider>
          <Header />
          {children}
          <Footer />
        </NextUiProvider>
      </body>
    </html>
  );
}
