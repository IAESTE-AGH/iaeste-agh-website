import type { TranslationKey, TRoutes, TSupportedLanguages } from './ui';
import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: TranslationKey): string {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: TSupportedLanguages = lang) {
        const pathName = path.replaceAll('/', '') as TRoutes;
        const hasTranslation =
            routes[l] !== undefined && routes[l][pathName] !== undefined;
        const translatedPath = hasTranslation ? routes[l][pathName] : path;

        return !showDefaultLang && l === defaultLang
            ? translatedPath
            : `/${l}${translatedPath}`;
    };
}
