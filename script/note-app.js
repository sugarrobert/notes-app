//load all notes from LS on page load
document.addEventListener('DOMContentLoaded', () => {
  const notesList = document.querySelector('.notes-list');
  const notes = Store.getNotes();
  Store.displayNotes(notesList, notes);
});

//redirect on edit page for create new note
document.querySelector('#create-note').addEventListener('click', () => {
  location.assign('./edit.html');
});

//event on container of all notes
document.querySelector('.notes-list').addEventListener('click', (e) => {
  e.preventDefault();

  //event for toggle body visibility of note
  if (e.target.classList.contains('toggle')) {
    //show text of note
    e.target.nextElementSibling.classList.toggle('show');
  }

  //event for edit note
  if (e.target.classList.contains('edit-button')) {
    id = e.target.dataset.id;

    location.assign(`./edit.html?id=${id}`);
  }

  //event for delete note from UI and LS
  if (e.target.classList.contains('delete-button')) {
    id = e.target.dataset.id;

    //delete note from UI
    e.target.parentElement.parentElement.remove();

    //delete note from LS
    Store.removeNote(id);
  }
});

//event listener for sorting notes
document.querySelector('.sort-notes').addEventListener('change', (e) => {
  e.preventDefault();

  const sort = document.querySelector('.sort-notes');
  const notes = Store.getNotes();
  const notesList = document.querySelector('.notes-list');

  //getting value of selected options
  let value = sort.options[sort.selectedIndex].value;

  //sorting array depending on selected value
  if (value === 'last-edited') {
    notes.sort((a, b) => b.changed - a.changed);
  }

  if (value === 'recently-created') {
    notes.sort((a, b) => b.created - a.created);
  }

  if (value === 'alphabetically') {
    notes.sort((a, b) => a.title.localeCompare(b.title));
  }

  //clear notes from list
  notesList.innerHTML = '';

  //display new sorted array
  Store.displayNotes(notesList, notes);
});

//event listener for search box
document.querySelector('#filter-notes').addEventListener('keyup', (e) => {
  let value = document.querySelector('#filter-notes').value;
  const notesList = document.querySelector('.notes-list');
  const notes = Store.getNotes();

  //check array for matching value
  const result = notes.filter((word) => word.title.includes(value));

  //clear notes from list
  notesList.innerHTML = '';

  //display results that match
  Store.displayNotes(notesList, result);
});
