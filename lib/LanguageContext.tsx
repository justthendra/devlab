"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { translations, Language, TranslationKeys } from './translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, options?: { returnObjects?: boolean }) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedValue = (obj: Record<string, unknown>, path: string, returnObjects = false): any => {
    const keys = path.split('.');
    let current: unknown = obj;

    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path; // Return the key if not found
        }
    }

    if (returnObjects) return current;
    return typeof current === 'string' ? current : path;
};

const getBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';

    const browserLang = navigator.language.split('-')[0];
    const supportedLanguages: Language[] = ['en', 'tr', 'de', 'fr', 'es'];

    return supportedLanguages.includes(browserLang as Language)
        ? (browserLang as Language)
        : 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLanguage = localStorage.getItem('devlab-language') as Language;
        if (savedLanguage && translations[savedLanguage]) {
            setLanguageState(savedLanguage);
        } else {
            const browserLang = getBrowserLanguage();
            setLanguageState(browserLang);
        }
    }, []);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('devlab-language', lang);
    }, []);

    const t = useCallback((key: string, options?: { returnObjects?: boolean }): any => {
        return getNestedValue(translations[language] as unknown as Record<string, unknown>, key, options?.returnObjects);
    }, [language]);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ language: 'en', setLanguage, t: (key, options) => getNestedValue(translations.en as unknown as Record<string, unknown>, key, options?.returnObjects) }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
