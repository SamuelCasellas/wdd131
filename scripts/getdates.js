const yearSpan = document.getElementById('currentyear');
const year = new Date().getFullYear();
yearSpan.innerText = `©${year} Samuel Casellas USA`;

const modifiedSpan = document.getElementById('lastmodified');
const modDate = new Date(document.lastModified);
modifiedSpan.innerText = `Last modified: ${modDate}`;
