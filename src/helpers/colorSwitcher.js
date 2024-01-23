document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector(".checkbox");
    const themeStyles = document.querySelectorAll('link[title="theme"]');

    checkbox.addEventListener("change", function () {
        themeStyles.forEach(style => {
            if (checkbox.checked) {
                style.disabled = (style.getAttribute("href").indexOf("darkStyle.css") !== -1);
            } else {
                style.disabled = (style.getAttribute("href").indexOf("whiteStyle.css") !== -1);
            }
        });
    });
});