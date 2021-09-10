const icon = document.querySelector('.icon');
const menuItems = document.querySelectorAll('.menu-item');
icon.addEventListener('click', showFunc);

function showFunc() {
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('active');

  }

}
// glide 
const glide = document.querySelectorAll('.glide');
for (let i = 0; i < glide.length; i++) {
  let slider = new Glide(glide[i], {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    breakpoints: {
      1024: {
        perView: 2
      },
      600: {
        perView: 1
      }
    },
    gap: 50
  });
  slider.mount();
}
// new Glide('.glide', {
//   type: 'carousel',
//   startAt: 0,
//   perView: 4,
//   breakpoints: {
//     1024: {
//       perView: 2
//     },
//     600: {
//       perView: 1
//     }
//   },
//   gap: 50
// }).mount()