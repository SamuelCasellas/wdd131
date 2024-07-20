// window.addEventListener('scroll', function(e) {
//   const header = document.querySelector('header');
//   header.classList.toggle('scrolled', window.scrollY > 0);
// });


// Note: I'm using jQuery here just for experimentation

// Get the target element
const introSection = $('#intro')[0];
const projectsSection = $('#projects')[0];
const contactSection = $('#contact')[0];

$('a[href="#intro"]').click(function (e) {
  e.preventDefault();
  introSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
  // window.scrollBy(0, -800); // Adjust the scroll position to account for the header height
});

$('a[href="#projects"]').click(function (e) {
  e.preventDefault();
  projectsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
  // window.scrollBy(0, -800); // Adjust the scroll position to account for the header height
});

$('a[href="#contact"]').click(function (e) {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
  // window.scrollBy(0, -800); // Adjust the scroll position to account for the header height
});

// Add a click event listener to the link
// document.querySelector('a[href="#target-element"]').addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent the default link behavior
//   targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
//   window.scrollBy(0, -80); // Adjust the scroll position to account for the header height
// });
