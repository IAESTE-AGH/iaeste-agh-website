export const supportedLanguages = [
    { lang: 'en', name: 'English' },
    { lang: 'pl', name: 'Polski' },
] as const;

export const routes = {
    en: {
        contact: '/contact',
        companies: '/for-companies',
    },
    pl: {
        contact: '/kontakt',
        companies: '/dla-firm',
    },
};

export type TRoutes = keyof (typeof routes)[TSupportedLanguages];
export type TSupportedLanguages = (typeof supportedLanguages)[number]['lang'];

export const defaultLang: TSupportedLanguages = 'pl';

export const ui = {
    pl: {
        'page.main': 'Strona główna',
        'page.companies': 'Dla firm',
        'page.contact': 'Kontakt',

        'nav.exchange': 'Wymiana',
        'nav.forCompanies': 'Dla firm',
        'nav.contact': 'Kontakt',

        'landing.slogan': 'Work. Experience. Discover.',

        'section.ourValues': 'Nasze wartości',
        'section.visitNewPlaces': 'Odwiedź z nami nowe miejsca!',
        'section.partners': 'Oni nam zaufali, teraz kolej na Ciebie!',
        'section.timeline': 'Zanurz się w ciekawe projekty!',
        'section.companyOpinions': 'Co myślą o nas firmy?',
        'section.findUs': 'Gdzie można nas znaleźć?',
        'section.companyContact': 'Kontakt',
        'section.socialMedia': 'Znajdź nas na mediach!',

        'companyContact.management': 'Zarząd IAESTE AGH',
        'companyContact.coordinators': 'Koordynatorzy akcji',

        'values.trust': 'Zaufanie',
        'values.growth': 'Rozwój',
        'values.commitment': 'Aktywność',
        'values.friendship': 'Przyjaźń',
        'values.diversity': 'Różnorodność',

        'timeline.spring': 'Wiosna',
        'timeline.summer': 'Lato',
        'timeline.autumn': 'Jesień',
        'timeline.winter': 'Zima',
        'timeline.learnMore': 'Więcej o projekcie',
        'timeline.learnMoreLink': 'Dołącz do nas',

        'newPlaces.happyStudents': 'Zadowolonych studentów',
        'newPlaces.sentStudents': 'Przyjętych i wysłanych studentów rocznie',
        'newPlaces.countries': 'Krajów partnerskich',
        'newPlaces.internships': 'Płatnych praktyk dostępnych co roku',
        'newPlaces.info.title': 'Chcesz dowiedzieć się więcej o wymianie?',
        'newPlaces.info.text':
            'Zapraszamy cię na stronę główną IAESTE Polska, tam dowiesz się wszystkiego o praktykach.',
        'newPlaces.info.button': 'Odwiedź stronę IAESTE Polska',

        'footer.copyright':
            '© 2024 Komitet Lokalny IAESTE AGH | Stworzone przez IAESTE AGH',
        'footer.boardMemberContact': 'Kontakt do zarządu KL IAESTE AGH',
        'footer.board.president.title': 'Prezes',
        'footer.board.president.email': 'imie.nazwisko@iaeste.pl',
        'footer.board.president.name': 'Imię Nazwisko',
        'footer.board.treasurer.title': 'Skarbnik',
        'footer.board.treasurer.email': 'imie.nazwisko@iaeste.pl',
        'footer.board.treasurer.name': 'Imię Nazwisko',
        'footer.board.vicepresident.title': 'Wiceprezes',
        'footer.board.vicepresident.email': 'imie.nazwisko@iaeste.pl',
        'footer.board.vicepresident.name': 'Imię Nazwisko',
        'footer.invoice.title': 'Dane do faktury',
        'footer.documents.title': 'Dokumenty',
        'footer.documents.statute.title': 'Regulamin czegoś tam',
        'footer.documents.statute.link': '#regulamin',
        'footer.documents.application.title': 'Wniosek o cokolwiek',
        'footer.documents.application.link': '#wniosek',
        'footer.documents.nextStatue.title': 'Kolejny regulamin czegoś tam',
        'footer.documents.nextStatue.link': '#kolejny',
        'footer.links.title': 'Przydatne linki',
        'footer.links.internship.title': 'Informacje o praktykach',
        'footer.links.internship.link': '#praktyki',
        'footer.links.form.title': 'Formularz zgłoszeniowy na coś tam',
        'footer.links.form.link': '#formularz',
        'footer.links.recrutationForm.title': 'Formularz rekrutacyjny',
        'footer.links.recrutationForm.link': '#rekrutacyjny',
        'footer.links.statue.title': 'Regulamin czegoś tam',
        'footer.links.statue.link': '#regulamin-link',
        'footer.address.fullname': 'Komitet Lokalny IAESTE AGH Kraków',
        'footer.address.correspondence.title': 'Adres korespondencyjny',
        'footer.address.correspondence.street': 'al. Mickiewicz 30',
        'footer.address.correspondence.zipAndCity': '30-059 Kraków',
        'footer.address.headquarters.title': 'Adres siedziby',
        'footer.address.headquarters.place': 'Budynek U-6',
        'footer.address.headquarters.street': 'Władysława Reymonta 21A',
        'footer.address.headquarters.zipAndCity': '30-059 Kraków',
    },
    en: {
        'page.main': 'Main page',
        'page.companies': 'For companies',
        'page.contact': 'Contact',

        'nav.exchange': 'Exchange',
        'nav.forCompanies': 'For companies',
        'nav.contact': 'Contact',

        'section.ourValues': 'Our Values',
        'section.visitNewPlaces': 'Visit new places with us!',
        'section.partners': 'These companies trusted us, now your turn!',
        'section.timeline': 'Immerse yourself in interesting projects!',
        'section.companyOpinions': 'What do other companies think of us?',
        'section.findUs': "We're here!",
        'section.companyContact': 'Contact',
        'section.socialMedia': 'Find us on social media',

        'landing.slogan': 'Work. Experience. Discover.',

        'companyContact.management': 'IAESTE AGH Management',
        'companyContact.coordinators': 'Actions coordinators',

        'values.trust': 'Trust',
        'values.growth': 'Growth',
        'values.commitment': 'Commitment',
        'values.friendship': 'Friendship',
        'values.diversity': 'Diversity',

        'timeline.spring': 'Spring',
        'timeline.summer': 'Summer',
        'timeline.autumn': 'Autumn',
        'timeline.winter': 'Winter',
        'timeline.learnMore': 'More about the project',
        'timeline.learnMoreLink': 'Join us',

        'newPlaces.happyStudents': 'Happy students',
        'newPlaces.sentStudents': 'Students sent and received annually',
        'newPlaces.countries': 'Partner countries',
        'newPlaces.internships': 'Paid internships available annually',
        'newPlaces.info.title': "Want to learn more about students' exchange?",
        'newPlaces.info.text':
            'Visit IAESTE Poland to find out more about internships.',
        'newPlaces.info.button': 'Visit IAESTE Poland',

        'footer.copyright':
            '© 2024 Local committee IAESTE AGH | By IAESTE AGH',
        'footer.boardMemberContact': 'KL IAESTE AGH Board',
        'footer.board.president.title': 'President',
        'footer.board.president.email': 'imie.nazwisko@iaeste.pl',
        'footer.board.president.name': 'Imię Nazwisko',
        'footer.board.treasurer.title': 'Treasurer',
        'footer.board.treasurer.email': 'imie.nazwisko@iaeste.pl',
        'footer.board.treasurer.name': 'Imię Nazwisko',
        'footer.board.vicepresident.title': 'Vicepresident',
        'footer.board.vicepresident.email': 'imie.nazwisko@iaeste.pl',
        'footer.board.vicepresident.name': 'Imię Nazwisko',
        'footer.invoice.title': 'Invoice information',
        'footer.documents.title': 'Documents',
        'footer.documents.statute.link': '#statute',
        'footer.documents.statute.title': 'Regulation of something',
        'footer.documents.application.link': '#application',
        'footer.documents.application.title': 'Application for anything',
        'footer.documents.nextStatue.link': '#next',
        'footer.documents.nextStatue.title': 'Another regulation of something',
        'footer.links.title': 'Useful links',
        'footer.links.internship.link': '#internships',
        'footer.links.internship.title': 'Internship information',
        'footer.links.form.link': '#form',
        'footer.links.form.title': 'Application form for something',
        'footer.links.recrutationForm.link': '#recruitment-form',
        'footer.links.recrutationForm.title': 'Recruitment form',
        'footer.links.statue.link': '#regulation-link',
        'footer.links.statue.title': 'Regulation of something',
        'footer.address.fullname': 'Local Committee IAESTE AGH Kraków',
        'footer.address.correspondence.street': 'al. Mickiewicz 30',
        'footer.address.correspondence.title': 'Correspondence address',
        'footer.address.correspondence.zipAndCity': '30-059 Kraków',
        'footer.address.headquarters.title': 'Building U-6',
        'footer.address.headquarters.place': 'Headquarters address',
        'footer.address.headquarters.street': 'Władysława Reymonta 21A',
        'footer.address.headquarters.zipAndCity': '30-059 Kraków',
    },
} as const;

export type TranslationKey = keyof (typeof ui)[TSupportedLanguages];
export const showDefaultLang = false;
