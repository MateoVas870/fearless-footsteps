import { getCurrentLanguage, toggleLanguage } from 'public/language';
import wixLocation from 'wix-location';

$w.onReady(function () {
    const lang = getCurrentLanguage();

    $w('#btnLanguage').label = lang === 'en' ? 'Español' : 'English';

    $w('#btnLanguage').onClick(() => {
        toggleLanguage();
        wixLocation.to(wixLocation.url);
    });
});
