
document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('botonRegistro');

  boton.addEventListener('click', function () {
    this.classList.remove('btn-dark');
    this.classList.add('btn-azul-personalizado');
    
  });
});