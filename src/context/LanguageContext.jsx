"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    // Cargar idioma guardado
    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) setLang(saved);
    }, []);

    // Guardar idioma
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const changeLang = (newLang) => setLang(newLang);

    return (
        <LanguageContext.Provider value={{ lang, changeLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
