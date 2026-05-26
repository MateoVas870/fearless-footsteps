import { getCurrentLanguage } from 'public/language';

// Traducciones: clave = ID del elemento en el editor de Wix
const translations = {
    es: {
        // Ejemplo: '#text1': 'Texto en español'
        // Reemplaza los IDs con los reales de tu editor
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
