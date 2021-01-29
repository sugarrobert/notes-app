//
document.addEventListener('DOMContentLoaded', () => {
  const queryString = window.location.search;
  if (queryString !== '') {
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const notes = Store.getNotes();

    notes.forEach((note) => {
      if (note.id === id) {
        const noteTitle = document.querySelector('#note-title');
        const noteBody = document.querySelector('#note-body');

        noteTitle.value = note.title;
        noteBody.value = note.body;
      }
    });
  }
});

document.querySelector('#cancel-changes').addEventListener('click', () => {
  location.assign('./index.html');
});

document.querySelector('#delete-note').addEventListener('click', () => {
  console.log('delete');
});

document.querySelector('#save-changes').addEventListener('click', () => {
  const queryString = window.location.search;
  if (queryString !== '') {
    const urlParams = new URLSearchParams(queryString);
    const urlId = urlParams.get('id');

    const notes = Store.getNotes();

    notes.forEach((item) => {
      if (item.id === urlId) {
        const noteTitle = document.querySelector('#note-title');
        const noteBody = document.querySelector('#note-body');

        let title = noteTitle.value;
        let body = noteBody.value;
        let created = item.created;
        let changed = Date.now();
        let id = urlId;

        const newNote = new Note(title, body, created, changed, id);
        Store.removeNote(urlId);
        Store.addNote(newNote);
      }
    });

    location.assign('./index.html');
  } else {
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
  }
});
