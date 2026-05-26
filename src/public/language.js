import { local } from 'wix-storage';

export function getCurrentLanguage() {
    return local.getItem('language') || 'en';
}

export function setLanguage(lang) {
    local.setItem('language', lang);
}

export function toggleLanguage() {
    const current = getCurrentLanguage();
    const next = current === 'en' ? 'es' : 'en';
    setLanguage(next);
    return next;
}
