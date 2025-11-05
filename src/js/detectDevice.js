document.addEventListener('DOMContentLoaded', function () {
    const isMobile = detectDevice();
    const INDEX_DESKTOP = './src/html/desktop/lang.html';
    const INDEX_MOBILE = './src/html/mobile/lang.html';

    function detectDevice() {
        const ua = navigator.userAgent;
        const  mobileRegex = /android|iphone|ipod|blackberry|iemobile|opera mini|mobile|windows phone|phone|webos|kindle|ipad|tablet/i;
        return mobileRegex.test(ua.toLocaleLowerCase());
    }

    if (isMobile) {
        location.href = INDEX_MOBILE;
    } else {
        location.href = INDEX_DESKTOP;
    }
})