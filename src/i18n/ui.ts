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
        'newPlaces.info.title': 'Chcesz dowiedzieć się więcej o wymianie?',
        'newPlaces.info.text':
            'Zapraszamy cię na stronę główną IAESTE Polska, tam dowiesz się wszystkiego o praktykach.',
        'newPlaces.info.button': 'Odwiedź stronę IAESTE Polska',
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
    },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
export const showDefaultLang = false;
