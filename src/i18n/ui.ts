export const supportedLanguages = {
    en: 'English',
    pl: 'Polski',
};

export const defaultLang: keyof typeof supportedLanguages = 'pl';

export const ui = {
    pl: {
        'nav.exchange': 'Wymiana',
        'nav.forCompanies': 'Dla firm',
        'nav.contact': 'Kontakt',
        'values.trust': 'Zaufanie',
        'values.growth': 'Rozwój',
        'values.commitment': 'Aktywność',
        'values.friendship': 'Przyjaźń',
        'values.diversity': 'Różnorodność',
        'section.ourValues': 'Nasze wartości',
    },
    en: {
        'nav.exchange': 'Exchange',
        'nav.forCompanies': 'For companies',
        'nav.contact': 'Contact',
        'values.trust': 'Trust',
        'values.growth': 'Growth',
        'values.commitment': 'Commitment',
        'values.friendship': 'Friendship',
        'values.diversity': 'Diversity',
        'section.ourValues': 'Our Values',
    },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang]; // Typowanie wszystkich kluczy tłumaczeń
export const showDefaultLang = false;
