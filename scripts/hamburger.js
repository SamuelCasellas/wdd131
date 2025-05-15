const hamButton = document.querySelector('#hamburger');
// const header = document.querySelector('header');
const navigation = document.querySelector('.user-buttons');
const navigationLinks = document.querySelector('nav');
// const navigation = document.querySelector('nav');
// const mainHeader = document.querySelector('h1');

hamButton.addEventListener('click', () => {
  hamButton.classList.contains('open') ? removePreventScrolls() : addPreventScrolls();
  hamButton.classList.toggle('open');
  navigation.classList.toggle('open');
  navigationLinks.classList.toggle('open');
  // mainHeader.classList.toggle('open');
  // header.classList.toggle('open');
});

function addPreventScrolls() {
  document.addEventListener('wheel', preventScroll, {passive: false});
  document.addEventListener('touchmove', preventScroll, {passive: false});
}

function removePreventScrolls() {
  document.removeEventListener('wheel', preventScroll);
  document.removeEventListener('touchmove', preventScroll);
}

function preventScroll(e) {
  e.preventDefault();
}

// Create a MediaQueryList object
const mediaQuery = window.matchMedia('(min-width: 35.5em)');

// Add an event listener to the MediaQueryList object
mediaQuery.addEventListener('change', function (event) {
  if (event.matches && hamButton.classList.contains('open')) {
    // close the menu automatically
    hamButton.click();
  }
});
