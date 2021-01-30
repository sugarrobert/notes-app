//on page load check for id in url
document.addEventListener('DOMContentLoaded', () => {
  const queryString = window.location.search;
  if (queryString !== '') {
    //get id from url
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    //load notes from LS
    const notes = Store.getNotes();

    //load title and body from LS that match id from url
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

//return on index page on cancel button
document.querySelector('#cancel-changes').addEventListener('click', () => {
  location.assign('./index.html');
});

//delete note on delete button
document.querySelector('#delete-note').addEventListener('click', () => {
  //check for id in url
  const queryString = window.location.search;
  if (queryString !== '') {
    //get id from url
    const urlParams = new URLSearchParams(queryString);
    const urlId = urlParams.get('id');

    //delete note from LS
    Store.removeNote(urlId);
  }

  //return on index page
  location.assign('./index.html');
});

//event listener for save button
document.querySelector('#save-changes').addEventListener('click', () => {
  const queryString = window.location.search;
  //check for id in url, if id is in url replace old value with new
  if (queryString !== '') {
    //get id from url
    const urlParams = new URLSearchParams(queryString);
    const urlId = urlParams.get('id');

    //load notes from LS
    const notes = Store.getNotes();

    const noteTitle = document.querySelector('#note-title');
    const noteBody = document.querySelector('#note-body');

    //loop throught notes array and replace value of edited note
    const mapedNotes = notes.map((item) => {
      if (item.id === urlId) {
        item = {
          ...item,
          title: noteTitle.value,
          body: noteBody.value,
          changed: Date.now(),
        };
      }
      return item;
    });

    //save new array with new value in LS
    localStorage.setItem('notes', JSON.stringify(mapedNotes));

    //return on index page
    location.assign('./index.html');
  } else {
    //if there is no id in url save new note
    const noteTitle = document.querySelector('#note-title');
    const noteBody = document.querySelector('#note-body');

    //Instantiate note
    const note = new Note();

    let title = noteTitle.value;
    let body = noteBody.value;
    let created = Date.now();
    let changed = Date.now();
    let id = note.generateID();

    //Instantiate new note
    const newNote = new Note(title, body, created, changed, id);

    //add note to LS
    Store.addNote(newNote);

    //return on index page
    location.assign('./index.html');
  }
});
