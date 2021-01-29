class Store {
  //getting all notes from LS
  static getNotes() {
    let notes;
    if (localStorage.getItem('notes') === null) {
      notes = [];
    } else {
      notes = JSON.parse(localStorage.getItem('notes'));
    }

    return notes;
  }

  //display all notes from LS
  static displayNotes(element) {
    const notes = Store.getNotes();

    notes.forEach(function (note) {
      const ui = new UI();

      //Add note to UI
      ui.generateNoteDOM(element, note);
    });
  }

  //add note in LS
  static addNote(note) {
    const notes = Store.getNotes();

    notes.push(note);

    localStorage.setItem('notes', JSON.stringify(notes));
  }

  //remove note from LS
  static removeNote(id) {
    const notes = Store.getNotes();

    notes.forEach(function (note, index) {
      if (note.id === id) {
        notes.splice(index, 1);
      }
    });

    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
