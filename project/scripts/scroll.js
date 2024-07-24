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
