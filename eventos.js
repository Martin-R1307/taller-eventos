const miDiv = document.getElementById('miDiv');
const boton = document.getElementById('btnSaludar');

if (boton) {
  boton.addEventListener('click', function(e) {
    e.stopPropagation();
    alert('Hola! Soy el botón');
  });
}

if (miDiv) {
  miDiv.addEventListener('click', function() {
    alert('Hola! Soy el div');
  });
}
