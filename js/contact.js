const icon = document.querySelector('.icon');
const menuItems = document.querySelectorAll('.menu-item');
icon.addEventListener('click', showFunc);

function showFunc() {
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('active');

  }

}