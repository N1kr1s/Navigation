const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');

const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const toggleNav = () => {
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
