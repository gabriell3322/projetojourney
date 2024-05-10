// carrossel

$(document).ready(function () {
    $('.custom-carousel-control').click(function () {
      if ($(this).hasClass('carousel-control-prev')) {
        $('#carouselExampleIndicators').carousel('prev');
      } else {
        $('#carouselExampleIndicators').carousel('next');
      }
    });
  });







const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});




document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
      hideLoadingScreen();
  }, 2000);
});

function hideLoadingScreen() {
  document.getElementById('loadingScreen').style.display = 'none';
}