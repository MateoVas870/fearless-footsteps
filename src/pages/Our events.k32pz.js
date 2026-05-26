import { getCurrentLanguage } from 'public/language';

const translations = {
    es: {
        '#78': 'Colecta de Juguetes 2024',
        '#text79': 'Evento Comunitario para Adultos Mayores',
        '#text80': 'Evento de la Iglesia'
    }
};

$w.onReady(function () {
    const lang = getCurrentLanguage();
    if (lang === 'es') {
        applyTranslations(translations.es);
    }
});

function applyTranslations(texts) {
    Object.keys(texts).forEach(id => {
        try {
            $w(id).text = texts[id];
        } catch (e) {}
    });
}
