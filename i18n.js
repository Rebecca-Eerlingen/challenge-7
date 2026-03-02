const translations = {
    nl: {
        "nav-start": "Start",
        "nav-menu": "Menu",
        "nav-sandwiches": "Broodjes",
        "nav-drinks": "Drinken",
        "nav-snacks": "Snacks",
        "nav-pastries": "Gebakjes",
        "nav-login": "Inloggen",
        "index-welcome": "Welkom bij Mees!",
        "menu-title": "Menu – Mees",
        "item-cheese-sandwich": "Broodje Kaas",
        "desc-cheese-sandwich": "Vers broodje met jonge kaas",
        "item-croissant": "Croissant",
        "desc-croissant": "Vers gebakken croissant",
        "item-coffee": "Koffie",
        "desc-coffee": "Verse koffie",
        "added-to-cart": "is toegevoegd aan je winkelkar!",
        "login-title": "Inloggen – Mees",
        "login-header": "Login",
        "placeholder-email": "JohnDoe@example.com",
        "placeholder-password": "Wachtwoord-123",
        "btn-register": "Registreren",
        "btn-login": "Login",
        "cart-title": "Winkelwagen",
        "cart-header": "Winkelmand",
        "cart-desc": "Hier zijn de producten die U heeft geselecteerd:",
        "btn-back-menu": "← Terug naar menu",
        "btn-complete-order": "Bestelling afronden →",
        "order-title": "Bestelling Afronden – Mees",
        "order-header": "Bestelling afronden",
        "order-desc": "Controleer uw bestelling voordat u betaalt.",
        "label-quantity": "Aantal:",
        "label-total": "Totaal:",
        "btn-back-cart": "← Terug naar winkelmand",
        "btn-pay": "Betalen",
        "thanks-order": "Bedankt voor uw bestelling!"
    },
    en: {
        "nav-start": "Home",
        "nav-menu": "Menu",
        "nav-sandwiches": "Sandwiches",
        "nav-drinks": "Drinks",
        "nav-snacks": "Snacks",
        "nav-pastries": "Pastries",
        "nav-login": "Login",
        "index-welcome": "Welcome to Mees!",
        "menu-title": "Menu – Mees",
        "item-cheese-sandwich": "Cheese Sandwich",
        "desc-cheese-sandwich": "Fresh sandwich with young cheese",
        "item-croissant": "Croissant",
        "desc-croissant": "Freshly baked croissant",
        "item-coffee": "Coffee",
        "desc-coffee": "Fresh coffee",
        "added-to-cart": "has been added to your shopping cart!",
        "login-title": "Login – Mees",
        "login-header": "Login",
        "placeholder-email": "JohnDoe@example.com",
        "placeholder-password": "Password-123",
        "btn-register": "Register",
        "btn-login": "Login",
        "cart-title": "Shopping Cart",
        "cart-header": "Shopping Cart",
        "cart-desc": "Here are the products you have selected:",
        "btn-back-menu": "← Back to menu",
        "btn-complete-order": "Complete order →",
        "order-title": "Complete Order – Mees",
        "order-header": "Complete order",
        "order-desc": "Check your order before paying.",
        "label-quantity": "Quantity:",
        "label-total": "Total:",
        "btn-back-cart": "← Back to shopping cart",
        "btn-pay": "Pay",
        "thanks-order": "Thank you for your order!"
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'email' || el.type === 'password')) {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update toggle button text if it exists
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'nl' ? 'EN' : 'NL';
    }
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'nl';
    const newLang = currentLang === 'nl' ? 'en' : 'nl';
    setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'nl';
    setLanguage(savedLang);
});

// For alerts in menupagina.html and bestelling.html
window.getTranslation = function(key) {
    const lang = localStorage.getItem('language') || 'nl';
    return translations[lang][key] || key;
};
