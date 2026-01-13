"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname.split("/")[1] || "en";

  const changeLang = (newLang) => {
    const parts = pathname.split("/");
    parts[1] = newLang;
    router.push(parts.join("/"));
  };

  return (
    <div className="relative flex items-center h-9 px-4 rounded-full  border border-black/10">
      <LangButton active={lang === "es"} onClick={() => changeLang("es")} flag="🇪🇸">
        ES
      </LangButton>

      <span className="mx-2 w-[1px] h-4 bg-black/20" />

      <LangButton active={lang === "en"} onClick={() => changeLang("en")} flag="🇺🇸">
        EN
      </LangButton>
    </div>
  );
}

function LangButton({ active, children, flag, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-2 text-[11px] tracking-[0.25em] font-semibold uppercase transition-all duration-300 ${
        active ? "text-black" : "text-black/40 hover:text-black"
      }`}
    >
      <span className="text-sm">{flag}</span>

      <span className="relative">
        {children}
        <span
          className={`absolute left-0 -bottom-1 h-[1px] bg-black transition-all duration-300 ${
            active ? "w-full" : "w-0"
          }`}
        />
      </span>
    </button>
  );
}
