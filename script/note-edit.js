document.querySelector('#cancel-changes').addEventListener('click', () => {
  location.assign('./index.html');
});

document.querySelector('#delete-note').addEventListener('click', () => {
  console.log('delete');
});

document.querySelector('#save-changes').addEventListener('click', () => {
  const noteTitle = document.querySelector('#note-title');
  const noteBody = document.querySelector('#note-body');

  const note = new Note();

  let title = noteTitle.value;
  let body = noteBody.value;
  let created = Date.now();
  let changed = Date.now();
  let id = note.generateID();

  const newNote = new Note(title, body, created, changed, id);

  Store.addNote(newNote);

  location.assign('./index.html');

  //console.log(window.location.search);
});
