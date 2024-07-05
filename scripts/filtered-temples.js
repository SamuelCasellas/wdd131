const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // My temples
  {
    templeName: "Philadelphia Pennsylvania Temple",
    location: "Philadelphia, Pennsylvania, United States",
    dedicated: "2016, September, 18",
    area: 61466,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/philadelphia-pennsylvania/400x250/philadelphia-pennsylvania-temple-exterior-1775822-wallpaper.jpg"
  },
  {
    templeName: "Taipei Taiwan Temple",
    location: "Taipei, Taiwan",
    dedicated: "1984, November, 17–18",
    area: 9945,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg"
  },
  {
    templeName: "Rexburg Idaho Temple",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
  }
];

function retrieveTemples(filter=null) {
  switch (filter) {
    case 'old':
      return temples.filter(t => +t.dedicated.split(',')[0] < 1900);
    case 'new':
      return temples.filter(t => +t.dedicated.split(',')[0] > 2000);
    case 'large':
      return temples.filter(t => t.area > 90000);
    case 'small':
      return temples.filter(t => t.area < 10000);
    default:
      return temples;
  }
}

function clearGrid() {
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }
}

function generateCard(temple) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  cardDiv.innerHTML = `<h2>${temple.templeName}</h2>
    <span><strong>Location: </strong>${temple.location}</span>
    <span><strong>Dedicated: </strong>${temple.dedicated}</span>
    <span><strong>Size: </strong>${temple.area} sq ft</span>
    <img src="${temple.imageUrl}" alt="A stunning image of the ${temple.templeName}"
     loading="lazy">`;
  return cardDiv;  
}

function addAnchorEventListener(button) {
  button.addEventListener('click', e => {
    clearGrid();
    retrieveTemples(e.target.id).forEach(t => grid.appendChild(generateCard(t)));
  });
}

Array.from(document.getElementsByTagName('a')).forEach(addAnchorEventListener);

const hamButton = document.querySelector('#hamburger');
const header = document.querySelector('header');
const navigation = document.querySelector('.navigation');
const mainHeader = document.querySelector('h1');

const grid =  document.querySelector('.grid');

temples.forEach(t => grid.appendChild(generateCard(t)));

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
