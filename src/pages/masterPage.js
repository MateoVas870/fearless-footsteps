import { getCurrentLanguage, toggleLanguage } from 'public/language';
import wixLocation from 'wix-location';

const menuTranslations = {
    en: {
        'Empower / Aporta': 'Empower'
    },
    es: {
        'Empower / Aporta': 'Aporta',
        'Home': 'Inicio',
        'About': 'Acerca de',
        'More': 'Más'
    }
};

$w.onReady(function () {
    const lang = getCurrentLanguage();

    $w('#btnLanguage').label = lang === 'en' ? 'Español' : 'English';

    translateMenu(lang);

    $w('#btnLanguage').onClick(() => {
        toggleLanguage();
        wixLocation.to(wixLocation.url);
    });
});

function translateMenu(lang) {
    const items = $w('#horizontalMenu1').menuItems;
    const translated = items.map(item => {
        const label = menuTranslations[lang]?.[item.label];
        return label ? { ...item, label } : item;
    });
    $w('#horizontalMenu1').menuItems = translated;
}
