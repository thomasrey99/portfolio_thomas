import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextUiProvider } from "@/context/NextUiProvider";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isEs = lang === "es";

  const siteUrl = process.env.NEXT_PUBLIC_URL_BASE;
  const siteName ="Thomas Rey";

  return {
    metadataBase: new URL(siteUrl),

    title: isEs
      ? `${siteName} | Desarrollador Web`
      : `${siteName} | Web Developer`,

    description: isEs
      ? "Portfolio profesional de desarrollo web."
      : "Professional web developer portfolio.",

    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },

    openGraph: {
      title: isEs
        ? `${siteName} | Desarrollador Web`
        : `${siteName} | Web Developer`,
      description: isEs
        ? "Portfolio profesional de desarrollo web."
        : "Professional web developer portfolio.",
      url: `/${lang}`,
      siteName,
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={sourceSans.className}>
        <NextUiProvider>
          <Header language={lang} />
          {children}
          <Footer language={lang} />
        </NextUiProvider>
      </body>
    </html>
  );
}
