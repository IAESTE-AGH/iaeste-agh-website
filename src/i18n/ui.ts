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

        'section.ourValues': 'Nasze wartości',
        'section.visitNewPlaces': 'Odwiedź z nami nowe miejsca!',

        'values.trust': 'Zaufanie',
        'values.growth': 'Rozwój',
        'values.commitment': 'Aktywność',
        'values.friendship': 'Przyjaźń',
        'values.diversity': 'Różnorodność',

        'newPlaces.happyStudents': 'Zadowolonych studentów',
        'newPlaces.sentStudents': 'Przyjętych i wysłanych studentów rocznie',
        'newPlaces.countries': 'Krajów partnerskich',
        'newPlaces.internships': 'Płatnych praktyk dostępnych co roku',
    },
    en: {
        'nav.exchange': 'Exchange',
        'nav.forCompanies': 'For companies',
        'nav.contact': 'Contact',

        'section.ourValues': 'Our Values',
        'section.visitNewPlaces': 'Visit new places with us!',

        'values.trust': 'Trust',
        'values.growth': 'Growth',
        'values.commitment': 'Commitment',
        'values.friendship': 'Friendship',
        'values.diversity': 'Diversity',

        'newPlaces.happyStudents': 'Happy students',
        'newPlaces.sentStudents': 'Students sent and accepted annually',
        'newPlaces.countries': 'Partner countries',
        'newPlaces.internships': 'Paid internships available annually',
    },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang]; // Typowanie wszystkich kluczy tłumaczeń
export const showDefaultLang = false;
