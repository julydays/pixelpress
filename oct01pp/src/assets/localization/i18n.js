import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "ABOUT_TEXT": "Antidoto focuses on long-form text and photo essays with an international scope. For orders and information write to: info@antidoto.global.",
                    "HOME": "Home",
                    "COPIES": "Copies",
                    "TITLE_1": "Promises |  Mexico |  2017  |  96 pp.",
                    "TITLE_2": "Havana Uncertainty |  Mexico |  2012  |  36 pp.",
                    "ORDER": "For orders write to: info@antidoto.global"
                }
            },
            es: {
                translations: {
                    "ABOUT_TEXT": "Antidoto se dedica a textos y ensayos de fotografías y multimedia de alcance internacional. Para pedidos e información escríbe a: info@antidoto.global.",
                    "HOME": "Inicio",
                    "COPIES": "Ejemplares",
                    "TITLE_1": "Promesas |  México |  2017  |  96 pp.",
                    "TITLE_2": "La Havana Incierta |  México |  2012  |  36 pp.",
                    "ORDER": "Para pedidos escríbe a: info@antidoto.global"
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