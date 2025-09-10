var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.indexOf("firefox") > -1) {
    document.write("<p>Firefox selain havaittu</p>");
    window.location.href = "https://www.mozilla.org";
} else {
    document.write("<p>Ei Firefox selainta!</p>");
    window.location.href = "https://www.google.com";
}