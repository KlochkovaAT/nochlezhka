const header = document.querySelector('.header');

let prevScroll = window.scrollY;
let curScroll;

window.addEventListener('scroll', () => {
  curScroll = window.scrollY;
  let headerHidden = header.classList.contains('header_hidden');

  if (curScroll > prevScroll && !headerHidden) {
    header.classList.add('header_hidden');
  } else if (curScroll < prevScroll && headerHidden) {
    header.classList.remove('header_hidden');
  }

  prevScroll = curScroll;
});
