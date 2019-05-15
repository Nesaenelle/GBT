$(document).ready(function() {
    var baseUrl = window.location.href
        .replace(window.location.hash, "");
    var elementsA = [].slice.call(document.querySelectorAll("animateMotion"));
    var elementsB = [].slice.call(document.querySelectorAll("mpath"));
    var elements = elementsA.concat(elementsB);


    elements.filter(function(element) {
        return (element.getAttribute("xlink:href"));
    })
    .forEach(function(element) {
        element.setAttribute("xlink:href", baseUrl + element.getAttribute("xlink:href"));
    });
});