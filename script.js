
document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('botonRegistro');

  boton.addEventListener('click', function () {
    this.classList.remove('btn-dark');
    this.classList.add('btn-azul-personalizado');
    
  });
});
const res = document.querySelectorAll('.res');
const prevBtn = document.querySelector('.prev-btn'); 
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showReview(index) {
  res.forEach((res, i) => {
    res.classList.toggle('activa', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + res.length) % res.length;
  showReview(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % res.length;
  showReview(currentIndex);
});

// Autoplay
setInterval(() => {
  currentIndex = (currentIndex + 1) % res.length;
  showReview(currentIndex);
}, 5000);
