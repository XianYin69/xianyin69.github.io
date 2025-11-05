document.addEventListener('DOMContentLoaded', function() {
    const FLAG = document.getElementById('#STOP');

    function isSignal(FLAG) {
        return FLAG !== 'null';
    }
    //Confuse Access Type
    const PAGE_SURVIVE_ERROR_NOTICE = "../notice/lang.html";
    function goToPage() {
        location.href = PAGE_SURVIVE_ERROR_NOTICE;
    }
    goToPage()
})