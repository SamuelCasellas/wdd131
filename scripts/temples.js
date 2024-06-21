const hamButton = document.querySelector('#hamburger');
const header = document.querySelector('header');
const navigation = document.querySelector('.navigation');
const mainHeader = document.querySelector('h1');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
  mainHeader.classList.toggle('open');
  header.classList.toggle('open');
});

// Create a MediaQueryList object
const mediaQuery = window.matchMedia('(min-width: 37.5em)');

// Add an event listener to the MediaQueryList object
mediaQuery.addEventListener('change', function (event) {
  if (event.matches && hamButton.classList.contains('open')) {
    // close the menu automatically
    hamButton.click();
  }
});
