import { getCurrentLanguage } from 'public/language';

const translations = {
    en: {
        '#text80': 'Our Specialized Team',
        '#text81': 'Wendy Rodriguez\nExecutive Director\nCEO Financial Literacy &\nCommunity Empowerment Leader',
        '#text83': 'Giovanny Rodriguez\nReal Estate Education, Foreclosure & Investment Specialist.',
        '#section3title1': 'Strategic Allies & Partners'
    },
    es: {
        '#text80': 'Nuestro Equipo Especializado',
        '#text81': 'Wendy Rodriguez\nDirectora Ejecutiva\nCEO de Educación Financiera y\nLiderazgo Comunitario',
        '#text83': 'Giovanny Rodriguez\nEspecialista en Educación de Bienes Raíces, Ejecución Hipotecaria e Inversiones.',
        '#section3title1': 'Aliados & Socios Estratégicos'
    }
};

$w.onReady(function () {
    const lang = getCurrentLanguage();
    applyTranslations(translations[lang]);
});

function applyTranslations(texts) {
    Object.keys(texts).forEach(id => {
        try {
            $w(id).text = texts[id];
        } catch (e) {}
    });
}
