function scrollIt(element) {  
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

const btns = document.querySelectorAll('.scrollPoint');
const sections = document.querySelectorAll('.scrollDestination');

for(let i = 0; i < sections.length; i++) {
    btns[i].addEventListener('click', () => {
    scrollIt(sections[i]);
    });
}