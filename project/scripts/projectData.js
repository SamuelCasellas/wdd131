const projects = [
  // TODO: Come back here to add real project data
  // {
  //   name: "Orbit Simulator",
  //   image: "images/satellite_simulator.png",
  //   imageAlt: "Image of a orbit simulator",
  //   caption: "An open OpenGL instance",
  //   description: "This simulation involves various satellites orbiting around Earth with ",
  //   details: [
  //     "Written in C++",
  //     "Includes heavy physics operations",
  //     // "Lorem ipsum dolor sit",
  //     // "Lorem ipsum dolor sit",
  //   ],
  // },
  {
    name: "The House of the Lord",
    image: "../images/temple.png",
    imageAlt: "Image of a temple",
    caption: "San Diego California",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae sint praesentium, quaerat tenetur consequuntur voluptatibus omnis. Vel magni dolores vero, hic obcaecati reprehenderit quam ut beatae minus aliquid incidunt.",
    details: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    name: "The House of the Lord",
    image: "../images/temple.png",
    imageAlt: "Image of a temple",
    caption: "San Diego California",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae sint praesentium, quaerat tenetur consequuntur voluptatibus omnis. Vel magni dolores vero, hic obcaecati reprehenderit quam ut beatae minus aliquid incidunt.",
    details: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    name: "The House of the Lord",
    image: "../images/temple.png",
    imageAlt: "Image of a temple",
    caption: "San Diego California",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae sint praesentium, quaerat tenetur consequuntur voluptatibus omnis. Vel magni dolores vero, hic obcaecati reprehenderit quam ut beatae minus aliquid incidunt.",
    details: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    name: "The House of the Lord",
    image: "../images/temple.png",
    imageAlt: "Image of a temple",
    caption: "San Diego California",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae sint praesentium, quaerat tenetur consequuntur voluptatibus omnis. Vel magni dolores vero, hic obcaecati reprehenderit quam ut beatae minus aliquid incidunt.",
    details: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
];

const grid = $('.grid')[0];

projects.forEach(createCard);

function createCard(project, index) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card fade-in';
  cardElement.innerHTML = innerCardTemplate(project, index);
  grid.appendChild(cardElement);
}


function innerCardTemplate(project, index) {
  const header = `<h2>${project.name}</h2>`
  const figure = `<figure>
                    <img src="${project.image}" alt="${project.imageAlt}" />
                    <figcaption>${project.caption}</figcaption>
                  </figure>`;

  const textDiv = `<div>
                    <p>${project.description}</p>
                    <ul>
                      ${project.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                  </div>`;
  return index % 2 === 0 ? figure + textDiv : textDiv + figure;
}
