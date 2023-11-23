  // Muestra u oculta el botón dependiendo de la posición de desplazamiento
  window.onscroll = function() {
    showScrollButton();
};

function showScrollButton() {
    var button = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    // Desplazamiento suave hacia arriba
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}