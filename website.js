const firstSection = document.querySelector('.firstsection');
const thirdSection = document.querySelector('.thirdsection');
const fourthSection = document.querySelector('.fourthsection');
const fifthSection = document.querySelector('.fifthsection');
const sixthSection = document.querySelector('.sixthsection');
const seventhSection = document.querySelector('.seventhsection');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      entry.target.style.transitionDuration = '1.5s'; 
    } else {
      entry.target.classList.remove('in-view');
      entry.target.style.transitionDuration = ''; 
    }
  });
}, { rootMargin: '-50px 0px' });

observer.observe(firstSection);
observer.observe(thirdSection);
observer.observe(fourthSection);
observer.observe(fifthSection);
observer.observe(sixthSection);
observer.observe(seventhSection);

const expertContents = document.querySelectorAll('.expertcontent');

expertContents.forEach(expertContent => {
  expertContent.addEventListener('mouseenter', () => {
    expertContent.style.borderBottomLeftRadius = '120px';
    const img = expertContent.querySelector('img');
    img.style.borderBottomLeftRadius = '120px';
  });

  expertContent.addEventListener('mouseleave', () => {
    expertContent.style.borderBottomLeftRadius = '30px';
    const img = expertContent.querySelector('img');
    img.style.borderBottomLeftRadius = '30px';
  });
});


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function handleScroll() {
  const logos = document.querySelectorAll('.logos-container img');
  logos.forEach((logo) => {
    if (isInViewport(logo)) {
      logo.classList.add('visible');
    } else {
      logo.classList.remove('visible');
    }
  });
}

// Initial check on page load
window.addEventListener('load', handleScroll);

// Check on scroll
window.addEventListener('scroll', handleScroll);
