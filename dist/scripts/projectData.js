const projects = [
  {
    name: "Orbit Simulator",
    image: "./images/satellite-simulator.png",
    imageAlt: "Image of a orbit simulator",
    caption: "An open OpenGL instance",
    description: "This simulation involves various satellites orbiting around Earth with ",
    details: [
      {text: "Written in C++", link: null },
      {text: "Includes heavy physics operations", link: null },
      {text: "Designed with over 5 layers of inheritance (OOP)", link: null },
      {text: "Real", link: null },
    ],
  },
  {
    name: "Purified Streaming",
    image: "./images/cursing-ext.png",
    imageAlt: "The app icon with a video image with grawlixes crossed out",
    caption: "The extension's icon",
    description: "Entrepreneurship Project #2: Censor all profane words on the screen as well as mute similar words in YouTube videos.",
    details: [
      {text: "Uploaded to the Chrome Web Store", link: null },
      {text: "Designed compatibility for both YouTube and Netflix", link: null },
      {text: "Includes local storage for saving user settings", link: null },
      {text: "Youtube Demo", link: "https://www.youtu.be/n0poQjkZ01w" },
    ],
  },
  {
    name: "Galactic Typer",
    image: "./images/galactic.jpg",
    imageAlt: "Image of a nebula for the background of the game",
    caption: "The main nebula in the game.",
    description: "This software is a game to test your typing precision! Meteors will spawn with words to be spelled, or math problems to be solved depending on your choice. Type the words or solve the math problems correctly to shoot down the meteors before they reach your home base! If too many reach, it's all over! Get the highest score and compare with your friends!",
    details: [
      {text: "Worked on with a team of 5 programmers", link: null },
      {text: "Built with Pygame", link: null },
      {text: "Software Demo Video", link: "https://youtu.be/mP8Z0NfU8sM" },
      {text: "Github project link", link: "https://github.com/tylerdonison/CSE310-Seven-Up-Team-Project" },
    ],
  },
  {
    name: "Bubo Owl - Baby Music",
    image: "./images/bubo-app.png",
    imageAlt: "Image of bubo the owl",
    caption: "A layout of the app's music player interface",
    description: "Entrepreneurship Project #1: Create an app for the Google Play Store that features nursery songs for children.",
    details: [
      {text: "Designed with React Native", link: null },
      {text: "Built with Redux state management", link: null },
      {text: "Featured app themes and featured 20 hand-picked music tracks", link: null },
      {text: "GitHub Repository", link: "https://github.com/SamuelCasellas/Nursery-Rhymes" },
    ],
  },
];

const grid = $('.grid')[0];

projects.forEach(createCard);

function createCard(project, index) {
  const outerDiv = document.createElement('div');
  outerDiv.innerHTML = innerCardTemplate(project, index);
  grid.appendChild(outerDiv);
}


function innerCardTemplate(project, index) {
  const figure = `<figure>
                    <img loading="lazy" src="${project.image}" alt="${project.imageAlt}">
                    <figcaption>${project.caption}</figcaption>
                  </figure>`;

  const textDiv = `<div>
                    <p>${project.description}</p>
                    <ul>
                      ${project.details.map(d =>
                        d.link
                          ? `<a class="theme proj-details" href="${d.link}" target="_blank" rel="noreferrer nofollow"><li>${d.text}</li></a>`
                          : `<li>${d.text}</li>`
                      ).join('')}
                    </ul>
                  </div>`;
                  
  return `
    <h3>${project.name}</h3>
    <div class="card fade-in">
      ${index % 2 === 0 ? figure + textDiv : textDiv + figure}
    </div>`;
}
