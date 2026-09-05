const home=document.getElementById("home-navbtn");
const search=document.getElementById("searchproperty-navbtn");
const map=document.getElementById("map-navbtn");
if (home){home.addEventListener("click",function(){
    window.location.href="index.html";})}
if (search){search.addEventListener("click",function(){
    window.location.href="search-property.html";})}
if (map){map.addEventListener("click",function(){
    window.location.href="map.html";})}
const settings_menu=document.getElementsByClassName("settings-menu")[0];
const settings=document.getElementById("settings");
if(settings){
    settings.addEventListener("click", function(){
        settings_menu.classList.add("is-open");
    })
}
const exit_settings=document.getElementById("exit-settings-menu");
if(exit_settings){
    exit_settings.addEventListener("click", function(){
        settings_menu.classList.remove("is-open");
    })
}
const propertyNav=document.getElementById("property-purpose");
let prpsValue="buy";
const buy=document.getElementById("buy");
const rent=document.getElementById("rent");
const buyImg=document.getElementById("buyImg");
const rentImg=document.getElementById("rentImg");
if(buy && rent){
buy.addEventListener("click", function(){
    prpsValue="buy";
    console.log(prpsValue);
    prpsColor();
});
rent.addEventListener("click", function(){
    prpsValue="rent";
    console.log(prpsValue);
    prpsColor();
});
prpsColor();
}
function prpsColor(){
    if(prpsValue==="buy"){
        buy.style.color="#1E90FF";
        buy.style.borderBottom="3px solid #1E90FF";
        buyImg.style.filter="invert(0.5) sepia(1) saturate(5) hue-rotate(180deg)";
        rentImg.style.filter="drop-shadow(0 0 0 #000)";
        rent.style.color="#000";
        rent.style.borderBottom="3px solid transparent";
    }
    else if(prpsValue==="rent"){
        rent.style.color="#1E90FF";
        rent.style.borderBottom="3px solid #1E90FF";
        rentImg.style.filter="invert(0.5) sepia(1) saturate(5) hue-rotate(180deg)";
        buyImg.style.filter="drop-shadow(0 0 0 #000)";
        buy.style.color="#000";
        buy.style.borderBottom="3px solid transparent";
    }
}
const display=document.getElementById("display");
if (display) {
    const savedDisplay = localStorage.getItem("display") || "light";
    display.value = savedDisplay;
    document.body.classList.toggle("dark", savedDisplay === "dark");

    display.addEventListener("change", function(){
        localStorage.setItem("display", display.value);
        if(display.value==="light"){
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
    });
}

const translations = {
    en: {
        home: "Home", searchProperty: "Search Property", map: "Map", signIn: "Sign in", algiers: "Algiers", oran: "Oran", blida: "Blida", constantine: "Constantine", annaba: "Annaba", telemcen: "Telemcen",
        buy: "Buy", rent: "Rent", wilaya: "Wilaya", allWilayas: "All Wilayas",
        propertyType: "Property type", allTypes: "All types", apartment: "Apartment",
        house: "House", villa: "Villa", maximumPrice: "Maximum price", priceDzd: "Price in DZD",
        minimumArea: "Minimum area", search: "Search", squareMeters: "m²",
        tagline: "All your needs in one app", why: "Why 3A9ARAT?",
        buySell: "Here you can buy and sell property in Algeria.", smartSearch: "Smart Search",
        smartSearchText: "Find properties using multiple filters.", exploreProperties: "Explore Properties",
        explorePropertiesText: "Browse properties for rent or sale.", exploreMap: "Explore the Map",
        exploreMapText: "Discover properties based on their location.", compareProperties: "Compare Properties",
        comparePropertiesText: "Compare properties based on their details.",
        footerText: "Find, compare and discover properties across Algeria.", explore: "Explore",
        owners: "For Owners", company: "Company", social: "Social", addProperty: "Add Property",
        dashboard: "Dashboard", help: "Help", about: "About", contact: "Contact", privacy: "Privacy",
        terms: "Terms", followUs: "Follow us", settings: "Settings", chooseLanguage: "Choose language",
        english: "English", arabic: "Arabic", french: "French", display: "Display", light: "Light",
        dark: "Dark", account: "Account", switchJob: "Switch job", seller: "Seller", consumer: "Consumer",
        logOut: "Log out", searchMap: "Search", saved: "Saved", searchAndFilter: "Search and filter",
        filterWilaya: "Filter by wilaya", recommendedCities: "Recommended cities", chooseManually: "Or choose manually",
        sort: "Sort", sortBy: "Sort by:", recommended: "Recommended", lowHigh: "Price: Low to High",
        highLow: "Price: High to Low", newest: "Newest", oldest: "Oldest", titleAz: "Title (A-Z)",
        purpose: "Purpose", purposeProperty: "Purpose of property", both: "Both", clearFilters: "Clear filters",
        charmingHouse: "Charming Queen Anne House", houseDescription: "F3 house near the beach and the city center, with a beautiful view of the sea and the mountains.",
        ratings: "Ratings", locationMaps: "Our location in maps", enroll: "Enroll now!", propertyInfo: "Property informations",
        forRent: "For Rent", continueGoogle: "Continue with Google", createAccount: "Create Account",
        enterEmail: "Enter your email", enterPassword: "Enter your password", submit: "Submit", welcomeBack: "Welcome back",
        registerDetails: "Register with your personal details to use all of site features", signUp: "Sign up",
        enterName: "Enter your name", errorEmpty: ""
    },
    fr: {
        home: "Accueil", searchProperty: "Rechercher un bien", map: "Carte", signIn: "Se connecter", algiers: "Alger", oran: "Oran", blida: "Blida", constantine: "Constantine", annaba: "Annaba", telemcen: "Tlemcen",
        buy: "Acheter", rent: "Louer", wilaya: "Wilaya", allWilayas: "Toutes les wilayas", propertyType: "Type de bien",
        allTypes: "Tous les types", apartment: "Appartement", house: "Maison", villa: "Villa", maximumPrice: "Prix maximum",
        priceDzd: "Prix en DZD", minimumArea: "Surface minimale", search: "Rechercher", squareMeters: "m²",
        tagline: "Tous vos besoins dans une seule application", why: "Pourquoi 3A9ARAT?", buySell: "Achetez et vendez des biens en Algérie.",
        smartSearch: "Recherche intelligente", smartSearchText: "Trouvez des biens avec plusieurs filtres.", exploreProperties: "Explorer les biens",
        explorePropertiesText: "Parcourez les biens à louer ou à vendre.", exploreMap: "Explorer la carte", exploreMapText: "Découvrez les biens selon leur emplacement.",
        compareProperties: "Comparer les biens", comparePropertiesText: "Comparez les biens selon leurs détails.", footerText: "Trouvez, comparez et découvrez des biens en Algérie.",
        explore: "Explorer", owners: "Pour les propriétaires", company: "Entreprise", social: "Réseaux sociaux", addProperty: "Ajouter un bien", dashboard: "Tableau de bord", help: "Aide", about: "À propos", contact: "Contact", privacy: "Confidentialité", terms: "Conditions", followUs: "Suivez-nous",
        settings: "Paramètres", chooseLanguage: "Choisir la langue", english: "Anglais", arabic: "Arabe", french: "Français", display: "Affichage", light: "Clair", dark: "Sombre", account: "Compte", switchJob: "Changer de rôle", seller: "Vendeur", consumer: "Acheteur", logOut: "Se déconnecter", searchMap: "Rechercher", saved: "Enregistrés", searchAndFilter: "Rechercher et filtrer", filterWilaya: "Filtrer par wilaya", recommendedCities: "Villes recommandées", chooseManually: "Ou choisir manuellement", sort: "Trier", sortBy: "Trier par:", recommended: "Recommandé", lowHigh: "Prix croissant", highLow: "Prix décroissant", newest: "Plus récent", oldest: "Plus ancien", titleAz: "Titre (A-Z)", purpose: "Objectif", purposeProperty: "Objectif du bien", both: "Les deux", clearFilters: "Effacer les filtres", charmingHouse: "Charmante maison Queen Anne", houseDescription: "Maison F3 près de la plage et du centre-ville, avec une belle vue sur la mer et les montagnes.", ratings: "Évaluations", locationMaps: "Notre emplacement sur la carte", enroll: "S'inscrire maintenant!", propertyInfo: "Informations sur le bien", forRent: "À louer", continueGoogle: "Continuer avec Google", createAccount: "Créer un compte", enterEmail: "Saisissez votre e-mail", enterPassword: "Saisissez votre mot de passe", submit: "Envoyer", welcomeBack: "Bon retour", registerDetails: "Inscrivez-vous avec vos informations personnelles pour utiliser toutes les fonctionnalités du site", signUp: "S'inscrire", enterName: "Saisissez votre nom", errorEmpty: ""
    },
    ar: {
        home: "الرئيسية", searchProperty: "البحث عن عقار", map: "الخريطة", signIn: "تسجيل الدخول", algiers: "الجزائر", oran: "وهران", blida: "البليدة", constantine: "قسنطينة", annaba: "عنابة", telemcen: "تلمسان", buy: "شراء", rent: "إيجار", wilaya: "الولاية", allWilayas: "كل الولايات", propertyType: "نوع العقار", allTypes: "كل الأنواع", apartment: "شقة", house: "منزل", villa: "فيلا", maximumPrice: "السعر الأقصى", priceDzd: "السعر بالدينار الجزائري", minimumArea: "المساحة الدنيا", search: "بحث", squareMeters: "م²", tagline: "كل احتياجاتك في تطبيق واحد", why: "لماذا 3A9ARAT؟", buySell: "يمكنك شراء وبيع العقارات في الجزائر.", smartSearch: "بحث ذكي", smartSearchText: "ابحث عن العقارات باستخدام عدة فلاتر.", exploreProperties: "استكشف العقارات", explorePropertiesText: "تصفح العقارات المعروضة للإيجار أو البيع.", exploreMap: "استكشف الخريطة", exploreMapText: "اكتشف العقارات حسب موقعها.", compareProperties: "قارن العقارات", comparePropertiesText: "قارن العقارات حسب تفاصيلها.", footerText: "اعثر على العقارات وقارن بينها واستكشفها في الجزائر.", explore: "استكشف", owners: "للمالكين", company: "الشركة", social: "التواصل الاجتماعي", addProperty: "إضافة عقار", dashboard: "لوحة التحكم", help: "المساعدة", about: "حولنا", contact: "اتصل بنا", privacy: "الخصوصية", terms: "الشروط", followUs: "تابعنا", settings: "الإعدادات", chooseLanguage: "اختر اللغة", english: "الإنجليزية", arabic: "العربية", french: "الفرنسية", display: "المظهر", light: "فاتح", dark: "داكن", account: "الحساب", switchJob: "تغيير الدور", seller: "بائع", consumer: "مشتري", logOut: "تسجيل الخروج", searchMap: "بحث", saved: "المحفوظات", searchAndFilter: "البحث والتصفية", filterWilaya: "تصفية حسب الولاية", recommendedCities: "المدن المقترحة", chooseManually: "أو اختر يدوياً", sort: "ترتيب", sortBy: "ترتيب حسب:", recommended: "مقترح", lowHigh: "السعر من الأقل إلى الأعلى", highLow: "السعر من الأعلى إلى الأقل", newest: "الأحدث", oldest: "الأقدم", titleAz: "العنوان (أ-ي)", purpose: "الغرض", purposeProperty: "غرض العقار", both: "كلاهما", clearFilters: "مسح عوامل التصفية", charmingHouse: "منزل كوين آن الساحر", houseDescription: "منزل من نوع F3 بالقرب من الشاطئ ووسط المدينة، مع إطلالة جميلة على البحر والجبال.", ratings: "التقييمات", locationMaps: "موقعنا على الخريطة", enroll: "سجل الآن!", propertyInfo: "معلومات العقار", forRent: "للإيجار", continueGoogle: "المتابعة باستخدام Google", createAccount: "إنشاء حساب", enterEmail: "أدخل بريدك الإلكتروني", enterPassword: "أدخل كلمة المرور", submit: "إرسال", welcomeBack: "مرحباً بعودتك", registerDetails: "سجل بياناتك الشخصية لاستخدام جميع ميزات الموقع", signUp: "إنشاء حساب", enterName: "أدخل اسمك", errorEmpty: ""
    }
};

function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    const dictionary = translations[selectedLanguage];
    document.documentElement.lang = selectedLanguage;
    document.documentElement.dir = selectedLanguage === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (dictionary[key] !== undefined) element.textContent = dictionary[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if (dictionary[key] !== undefined) element.placeholder = dictionary[key];
    });
    const languageSelector = document.getElementById("language");
    if (languageSelector) languageSelector.value = selectedLanguage;
    localStorage.setItem("language", selectedLanguage);
}

const language = document.getElementById("language");
if (language) {
    applyLanguage(localStorage.getItem("language") || language.value || "en");
    language.addEventListener("change", () => applyLanguage(language.value));
}
const propertySearch=document.getElementById("property-search");
const propertyType=document.getElementById("property-type");
const propertyWilaya=document.getElementById("wilaya");
const propertyPrice=document.getElementById("price");
const propertyArea=document.getElementById("area")
if(propertySearch){
    propertySearch.addEventListener("submit", function(event){
        event.preventDefault();
        localStorage.setItem("currentWilaya" ,propertyWilaya.value);
        localStorage.setItem("currentType", propertyType.value);
        localStorage.setItem("currentPrice", propertyPrice.value);
        localStorage.setItem("currentArea", propertyArea.value);
        localStorage.setItem("currentPrps", prpsValue)
        window.location.href="smart-search.html";   
    })
}