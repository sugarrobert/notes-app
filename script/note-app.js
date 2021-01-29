//load all notes from LS on page load
document.addEventListener('DOMContentLoaded', () => {
  const notesList = document.querySelector('.notes-list');

  Store.displayNotes(notesList);
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
