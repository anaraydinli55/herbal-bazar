const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

// Başlangıç
let index = 0;
showSlide(index);

// Next
document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Prev
document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Otomatik slider
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

