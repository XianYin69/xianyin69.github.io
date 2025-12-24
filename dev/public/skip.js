(function () {
    function collectUserInfo() {
        return {
            userAgent: navigator.userAgent || 'N/A'
        }
    }

    function supportES2016 () {
        try {
            eval("2**3");
            return typeof Array.prototype.includes === 'function';
        } catch (e) {
            return false;
        }
    }
    const userInfo = collectUserInfo()
    if (!supportES2016()) {
        console.warn("Worried Browser:", userInfo.userAgent);
        window.location.href = '../src/old/bowShit.html'
    }
})();