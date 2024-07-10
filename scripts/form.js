const dropDown = document.querySelector('select');
const numReviews = document.querySelector('span');

const currentNumReviews = JSON.parse(getStorage('review-count') || 0);
numReviews.textContent = `Number of reviews submitted: ${currentNumReviews}`;

let productsArray = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    avgRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avgRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avgRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avgRating: 5.0
  }
];

function populateDropdown(items) {
  for (let item of items) {
    let option = document.createElement('option');
    option.textContent = item.name;
    option.value = item.id;
    dropDown.appendChild(option);
  }
}

populateDropdown(productsArray);
