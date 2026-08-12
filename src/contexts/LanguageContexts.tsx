import React, { createContext, useContext, useState } from "react";

type Language = "EN" | "JP";

interface LanguageContextType {
	lang: Language;
	toggleLang: () => void;
	setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [lang, setLangState] = useState<Language>("EN");

	const toggleLang = () => {
		setLangState((prev) => (prev === "EN" ? "JP" : "EN"));
	};

	const setLang = (newLang: Language) => {
		setLangState(newLang);
	};

	return (
		<LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
