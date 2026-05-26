import { getCurrentLanguage } from 'public/language';

const translations = {
    es: {
        '#Section1RegularTitle1': 'Tu Apoyo Puede Cambiar Generaciones.',
        '#Section1RegularLongtext1': 'Fearless Footsteps empodera a familias de Long Island a través del acceso a educación sobre propiedad de vivienda, educación financiera y caminos hacia la riqueza generacional. Proporcionamos las herramientas y la orientación necesarias para construir estabilidad a largo plazo y resiliencia económica.\n\nTu donación apoya directamente programas que eliminan barreras, fortalecen familias y crean un impacto comunitario duradero.\n\nJuntos, estamos construyendo futuros más sólidos, una familia a la vez.\n\nÚnete a nosotros. Apoya el camino.',
        '#text23': 'Fearless FootSteps\nCorreo: fearlessfootsteps@gmail.com\n\nWendy Rodriguez\nDirectora\nCelular: (631) 398-1803\nWhatsApp Disponible\n\nDiana Guardino\nEnlace Comunitaria\nCelular: (631) 972-5176',
        '#text18': 'Servimos Queens, Nassau, Suffolk, ubicados en Long Island, NY',
        '#text19': 'Sigue Nuestras Redes Sociales'
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
