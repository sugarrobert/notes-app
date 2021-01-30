class UI {
  //create new dom element for note
  generateNoteDOM(element, note) {
    //create div
    const noteEl = document.createElement('div');

    //add clas to div
    noteEl.className = 'note';

    //inner html for div
    noteEl.innerHTML = `
      <h2 class="toggle">${note.title}</h2>
      <div class="note-text" id="note-text">
        <p>${note.body}</p>
        <button data-id="${note.id}" class="btn edit-button">Edit</button>
        <button data-id="${note.id}" class="btn delete-button">Delete</button>
      </div>
      <span>${this.generateLastEdited(note.changed)}</span>
    `;

    //append div to element
    element.appendChild(noteEl);
  }

  //generate time stamp
  generateLastEdited(timeStamp) {
    //calculate time passed from creating note
    const start = Date.now() - timeStamp;
    //calculate seconds
    let seconds = Math.floor(start / 1000);
    //calculate minutes
    let minutes = Math.floor(seconds / 60);
    //calculate hours
    let hours = Math.floor(minutes / 60);

    let text;

    if (hours > 0) {
      text = `last edited ${hours} hours ago`;
    } else if (minutes > 0) {
      text = `last edited ${minutes} minutes ago`;
    } else {
      text = `last edited a few seconds ago`;
    }

    return text;
  }
}
