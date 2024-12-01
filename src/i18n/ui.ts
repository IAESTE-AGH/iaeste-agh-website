export const languages = {
    en: 'English',
    pl: 'Polski',
};

export const defaultLang = 'pl';

export const ui = {
    pl: {
        'nav.exchange': 'Wymiana',
        'nav.forCompanies': 'Dla firm',
        'nav.contact': 'Kontakt',
        'values.trust': 'Zaufanie',
        'values.growth': 'Rozwój',
        'values.activity': 'Aktywność',
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
        'values.activity': 'Activity',
        'values.friendship': 'Friendship',
        'values.diversity': 'Diversity',
        'section.ourValues': 'Our Values',
    },
} as const;

export type TranslationKey = keyof (typeof ui)['pl']; // Typowanie wszystkich kluczy tłumaczeń
export const showDefaultLang = false;
