import $ from 'jquery';

export default function highlightLink() {
  const scrollLink = $('.scroll');
  $(window).on('scroll', () => {
    scrollLink.each(() => {
      let sectionOffset = 
    });
  });
  scrollLink.on('click', (e) => {
    e.preventDefault();
    let hash = e.currentTarget.firstChild.hash
    document.querySelector(hash).scrollIntoView({
      behavior: 'smooth'
    });
  });
};
