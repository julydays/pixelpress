import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "ABOUT_TEXT_EN": "About text in English. Dummy copy placed here to check size, character count, and other important things. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec sodales ante, sed dapibus turpis. Integer dictum ultricies felis quis tincidunt. Nam id placerat mi.",
                    "HOME": "Home",
                    "COPIES": "Copies"
                }
            },
            es: {
                translations: {
                    "ABOUT_TEXT_ES": "About text in Spanish. Dummy copy placed here to check size, character count, and other important things. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec sodales ante, sed dapibus turpis. Integer dictum ultricies felis quis tincidunt. Nam id placerat mi.",
                    "HOME": "Inicio",
                    "COPIES": "Ejemplares"
                }
            }
        },
        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;