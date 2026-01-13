"use client";
import { Avatar } from "@nextui-org/react";
import Menu from "./menu";
import { useState } from "react";
import Dropdown from "./menu/Dropdown";
import Link from "next/link";
import { t } from "@/libs/i18n";
import Weather from "../weather";

export default function Header({ language }) {
  const traduction = t(language, "navbar");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((v) => !v);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 h-20 md:h-24 bg-white shadow-[0_10px_100px_rgba(0,0,0,0.1)]">
        <div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-10">

          {/* Brand */}
          <div className="flex items-center gap-3 min-w-0">
            <Avatar size="md" src="/profile.jpeg" className="md:hidden shrink-0" />
            <Avatar size="lg" src="/profile.jpeg" className="hidden md:block shrink-0" />

            <Link
              href="https://www.linkedin.com/in/thomas-rey-39099021b/"
              className="font-black tracking-wide text-sm sm:text-base md:text-xl hover:text-primary transition truncate"
            >
              THOMAS REY
            </Link>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-6">
            <Weather />
            <Menu isOpen={isOpen} onToggle={handleToggle} />
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-6">
            <Weather />
            <Menu isOpen={isOpen} onToggle={handleToggle} />
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30"
        />
      )}

      {/* DRAWER */}
      <Dropdown
        handleClose={handleClose}
        isOpen={isOpen}
        nav={traduction.nav}
        language={language}
      />
    </>
  );
}
