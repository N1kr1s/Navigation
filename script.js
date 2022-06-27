const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const arr = document.querySelectorAll('.animate__animated');

const toggleNav = () => {
  arr.forEach((item) => {
    item.classList.toggle('animate__rotateInDownLeft');
  });

  if (overlay.classList.contains('overlay-slide-left')) {
    overlay.classList.remove('overlay-slide-left');
  }

  menuBars.classList.toggle('change');

  overlay.classList.toggle('overlay-slide-right');
  if (!overlay.classList.contains('overlay-slide-right')) {
    overlay.classList.add('overlay-slide-left');
  }
};

menuBars.addEventListener('click', toggleNav);
overlay.addEventListener('click', toggleNav);
