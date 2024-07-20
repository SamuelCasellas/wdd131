const buttons = {
  day: "images/sun.svg",
  night: "images/moon.svg",
};

const engineerIcon = document.getElementById('engineer');
const testerIcon = document.getElementById('qae');
const entrepreneurIcon = document.getElementById('entrepreneur');

const currentTheme = getStorage('theme') || 'day';
const themeToggler = document.getElementById('theme-toggler');

// Initial setting
if (currentTheme === 'night') {
  themeToggler.setAttribute('src', buttons.night);
  document.querySelectorAll('.theme').forEach(el => el.classList.add('dark'));
} else {
  themeToggler.setAttribute('src', buttons.day);
}

themeToggler.addEventListener('click', () => {
  if (themeToggler.getAttribute('src').includes('sun')) {
    transitionDarkModeIcon(buttons.night);
    document.querySelectorAll('.theme').forEach(el => el.classList.add('dark'));
    setStorage('theme', 'night');
  } else {
    transitionDarkModeIcon(buttons.day);
    document.querySelectorAll('.theme').forEach(el => el.classList.remove('dark'));
    setStorage('theme', 'day');
  }
});

function transitionDarkModeIcon(newButton) {
  themeToggler.classList.remove('orbit-in');
  themeToggler.classList.add('orbit-out');
  setTimeout(() => {
    themeToggler.setAttribute('src', newButton);
    themeToggler.classList.add('orbit-in');
    // setTimeout(() => {
    //   themeToggler.classList.remove('orbit-in');
    // }, 600);
  }, 600);
}


// switch (currentTheme) {
//   case 'day':
//     break;
//   case 'night':

//     break;
//   default:
//     console.error('Unknown theme', currentTheme);
//     break;
// }


