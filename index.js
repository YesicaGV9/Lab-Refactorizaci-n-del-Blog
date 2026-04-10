let indice = 0;

const slides = document.querySelectorAll('.slide');

function mostrarSlide(i) {
  slides.forEach(s => s.classList.remove('activo'));
  slides[i].classList.add('activo');
}

document.getElementById('siguiente').onclick = () => {
  indice = (indice + 1) % slides.length;
  mostrarSlide(indice);
};

document.getElementById('anterior').onclick = () => {
  indice = (indice - 1 + slides.length) % slides.length;
  mostrarSlide(indice);
};