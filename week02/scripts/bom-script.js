const input = document.getElementById('favchap');
const button = document.getElementsByTagName('button')[0];
const list = document.getElementById('list');

function createListItem(chapterTitle) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.textContent = chapterTitle;
  deleteButton.textContent = '❌';
  li.appendChild(deleteButton);
  list.appendChild(li);
  deleteButton.addEventListener('click', function () {
    li.remove();
    input.focus();
  });
}

button.addEventListener('click', function () {
  const chapterTitle = input.value;
  if (!chapterTitle.trim()) return;
  input.value = '';
  createListItem(chapterTitle);
});
