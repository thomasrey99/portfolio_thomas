import { t } from "@/libs/i18n";

export async function generateMetadata({ params }) {
  const { lang, id } = await params;

  const siteUrl = process.env.NEXT_PUBLIC_URL_BASE;
  const siteName = "Thomas Rey";

  const data = t(lang, "projects");
  const project = data.projects.find(p => String(p.id) === String(id));

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      description: "El proyecto solicitado no existe.",
    };
  }

  return {
    title: `${project.name} | ${siteName}`,
    description: project.sub,

    alternates: {
      canonical: `/${lang}/projects/${id}`,
      languages: {
        es: `/es/projects/${id}`,
        en: `/en/projects/${id}`,
      },
    },

    openGraph: {
      title: project.name,
      description: project.sub,
      url: `/${lang}/projects/${id}`,
      siteName,
      type: "article",
      locale: lang === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
