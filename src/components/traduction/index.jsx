"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-[135px] right-[40px] z-40"
    >
      <div className="relative group">
        {/* Aura */}
        <div className="absolute -inset-3 rounded-full bg-black/5 blur-xl group-hover:bg-black/10 transition-all" />

        {/* Glass pill */}
        <div className="relative flex items-center gap-4 px-5 py-2 rounded-full backdrop-blur-md bg-white/65 shadow-[0_8px_28px_rgba(0,0,0,0.06)] border border-black/10">
          <LangButton active={lang === "es"} onClick={() => changeLang("es")} flag="🇦🇷">
            ES
          </LangButton>

          <span className="w-[1px] h-4 bg-black/20" />

          <LangButton active={lang === "en"} onClick={() => changeLang("en")} flag="🇺🇸">
            EN
          </LangButton>
        </div>
      </div>
    </motion.div>
  );
}

function LangButton({ active, children, flag, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-1 text-[10px] tracking-[0.32em] uppercase transition-all duration-300 ${
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
