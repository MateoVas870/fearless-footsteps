import { getCurrentLanguage, toggleLanguage } from 'public/language';
import wixLocation from 'wix-location';

$w.onReady(function () {
    const lang = getCurrentLanguage();

    // Muestra el idioma al que cambiará al hacer clic
    $w('#btnLanguage').label = lang === 'en' ? 'Español' : 'English';

    $w('#btnLanguage').onClick(() => {
        toggleLanguage();
        wixLocation.to(wixLocation.url);
    });
});
