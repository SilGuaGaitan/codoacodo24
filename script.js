const logo = document.getElementById('logo');

// Agrega un event listener para el evento click
logo.addEventListener('click', function() {
  // Desplaza la pantalla hacia arriba suavemente
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});