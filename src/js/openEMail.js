document.addEventListener("DOMContentLoaded", function() {
    const emailInfo = document.querySelectorAll("#EMAIL");
    emailInfo.forEach(item => {
        item.addEventListener("click", function() {
            const email = this.getAttribute("data-email");
            if (isValidEmail(email)) {
                window.location.href = `mailto:${email}`;
            } else {
                alert("Error");
            }
        })
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
})