//浏览器检测
function isBrowserCompatible() {
    return typeof Promise !== 'undefined' && typeof Proxy !== 'undefined';
}
//采集信息
function collectUserInfo() {
    return {
        userAgent: navigator.userAgent || 'N/A',
        userLanguage: navigator.language || 'N/A',
        width: window.screen.width,
        height: window.screen.height,
        pageBrowsing: window.location.href
    }
}
//功能检测
 function checkCapabilities(upgradeUrl) {
    if (isBrowserCompatible()) {
        return;
    }
    const userInfo = collectUserInfo()
     if (upgradeUrl) {
         window.location.href = upgradeUrl;
     }
 }
 export default checkCapabilities;