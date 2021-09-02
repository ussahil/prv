new Glide('.glide').mount();
const overlay = document.querySelectorAll('.image__overlay');
if ('backdrop-filter' in document.body.style) {

} else {

  for (let i = 0; i < overlay.length; i++) {
    overlay[i].style.backgroundColor = 'rgba(255,255,255,0.5)';
  }
}

const icon = document.querySelector('.icon');
const menuItems = document.querySelectorAll('.menu-item');
icon.addEventListener('click', showFunc);

function showFunc() {
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('active');

  }

}