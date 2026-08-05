(function () {
    var userLang = navigator.language || 'en-US';
    if (userLang.startsWith('en')) {
        window.location.href = './en-US/index.html';
    }
    else if (userLang.startsWith('zh')) {
        window.location.href = './zh-CN/index.html';
    }
    else {
        window.location.href = './en-US/index.html';
    }
})();