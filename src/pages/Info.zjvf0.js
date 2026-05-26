import { getCurrentLanguage } from 'public/language';

const translations = {
    es: {
        '#text21': 'Empoderando a Jóvenes Adultos en Nueva York',
        '#text42': 'Fearless Footsteps es una organización sin fines de lucro que empodera a jóvenes adultos en Nueva York. A través de iniciativas en Long Island y Queens, la organización empodera a jóvenes adultos y emprendedores construyendo autoestima, fomentando el crecimiento espiritual y promoviendo el bienestar mental y físico.',
        '#text48': 'El Rol de Nuestro Equipo',
        '#text55': 'Asistencia Bilingüe',
        '#text79': 'Asistencia en Ejecución Hipotecaria',
        '#text78': 'Nuestro equipo está completamente equipado para apoyar a clientes de habla inglesa y española.',
        '#text80': 'También brindamos apoyo y orientación a quienes están en riesgo de perder sus hogares.',
        '#text81': 'Apoyo',
        '#text84': 'Independientemente de su etapa actual, proporcionamos los recursos, la experiencia especializada y el apoyo estratégico necesarios para construir estabilidad financiera, seguridad a largo plazo e independencia económica.',
        '#text82': 'Orientación',
        '#text85': 'Nuestro equipo brinda orientación integral a lo largo del proceso de adquisición de vivienda, empoderando a las personas para alcanzar sus sueños mientras promueve el bienestar mental, la estabilidad a largo plazo y el crecimiento empresarial.',
        '#text83': 'Empoderamiento',
        '#text86': 'Empoderamos a nuestros clientes educándolos en cada aspecto del proceso de compra de vivienda.'
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
