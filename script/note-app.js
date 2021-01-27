document.querySelector('#create-note').addEventListener('click', () => {
  const notesList = document.querySelector('.notes-list');

  const ui = new UI();

  let title = 'Sisanje';
  let body = 'Cetvrtak u 13 h';
  let created = Date.now();
  let changed = Date.now();
  let id = 1;

  const note = new Note(title, body, created, changed, id);

  ui.generateNoteDOM(notesList, note);

  // location.assign('./edit.html');
});
