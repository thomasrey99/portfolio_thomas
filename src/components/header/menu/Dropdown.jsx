"use client";
import Link from "next/link";

export default function Dropdown({ nav, isOpen, language, handleClose }) {
  return (
    <div
      className={`fixed right-0 top-20 md:top-24 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] w-72 bg-white shadow-2xl z-40 transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* blindaje */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 flex flex-col h-full">

        {/* Links */}
        <nav className="flex flex-col divide-y">
          {nav.sections.map(({ id, label }) => (
            <Link
              key={id}
              href={`/${language}/#${id}`}
              onClick={handleClose}
              className="px-8 py-6 uppercase font-bold text-sm hover:bg-black/5 transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Language selector premium */}
        <div className="mt-auto px-6 pb-6 pt-4 border-t">
          <p className="text-[11px] tracking-widest text-black/40 mb-4">
            {nav.placeholder}
          </p>

          <div className="flex gap-3">
            <LangCard
              active={language === "es"}
              flag="🇦🇷"
              label="ES"
              onClick={() => location.pathname = "/es"}
            />
            <LangCard
              active={language === "en"}
              flag="🇺🇸"
              label="EN"
              onClick={() => location.pathname = "/en"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LangCard({ active, flag, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 h-12 rounded-xl border flex items-center justify-center gap-2 font-bold text-sm tracking-wider transition
        ${active
          ? "bg-primary  text-white"
          : "bg-white border-black/10 hover:bg-[rgba(120,2,233,0.2)] "}`}
    >
      <span className="text-lg">{flag}</span>
      {label}
    </button>
  );
}
