document.addEventListener("DOMContentLoaded", function() {
    const userLanguage = navigator.language;
    const mainLanguage = userLanguage.split("-")[0];

    const ZH_CN_PAGE = './zh/introduce.html';
    const EN_US_PAGE = './en/introduce.html';
    const DEFAULT_PAGE = './en/introduce.html';

    switch (mainLanguage) {
        case 'en': location.href = EN_US_PAGE;break;
        case 'zh': location.href = ZH_CN_PAGE;break;
        default: location.href = DEFAULT_PAGE;
    }
})