const fadeElements = Array.from(document.querySelectorAll('.fade-in'))
  .concat(Array.from(document.querySelectorAll('.fade-in-2')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

fadeElements.forEach(element => {
  observer.observe(element);
});
