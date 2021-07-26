export default function smoothScroll() {
  // smooth scrolling
  const links = document.querySelectorAll('.link');
  const sections = document.querySelectorAll('section');
  links.forEach( link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(e.currentTarget.firstChild.hash).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // highlight link
  document.querySelector('#content').addEventListener('scroll', (e) => {
    let scrollBarLocation = e.currentTarget.scrollTop;
    let current = '';

    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      if ( scrollBarLocation >= sectionTop ) {
        current = section.getAttribute('id');
      }
    });

    links.forEach( link => {
      link.classList.remove('active');
      if ( link.firstChild.hash.includes(current) ) {
        link.classList.add('active');
      }
    });
  });
};
