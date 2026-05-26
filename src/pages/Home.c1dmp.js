import { getCurrentLanguage } from 'public/language';

const translations = {
    es: {
        '#text10': 'Bienvenidos a',
        '#text4': 'Fearless Footsteps',
        '#tempCompNickName1572955497990': 'Empoderando a Jóvenes Adultos en Nueva York',
        '#text23': 'Fearless FootSteps\nCorreo: fearlessfootsteps@gmail.com\n\nWendy Rodriguez\nDirectora\nCelular: (631) 398-1803\nWhatsApp Disponible\n\nDiana Guardino\nEnlace Comunitaria\nCelular: (631) 972-5176',
        '#text18': 'Servimos Queens, Nassau, Suffolk, ubicados en Long Island, NY',
        '#text19': 'Sigue Nuestras Redes Sociales'
    }
};

const buttonTranslations = {
    es: {
        '#button3': 'Contáctanos'
    }
};

$w.onReady(function () {
    const lang = getCurrentLanguage();
    if (lang === 'es') {
        applyTextTranslations(translations.es);
        applyButtonTranslations(buttonTranslations.es);
    }
});

function applyTextTranslations(texts) {
    Object.keys(texts).forEach(id => {
        try {
            $w(id).text = texts[id];
        } catch (e) {}
    });
}

function applyButtonTranslations(buttons) {
    Object.keys(buttons).forEach(id => {
        try {
            $w(id).label = buttons[id];
        } catch (e) {}
    });
}
