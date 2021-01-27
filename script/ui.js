class UI {
  generateNoteDOM(element, note) {
    const noteEl = document.createElement('a');

    noteEl.className = 'note';

    noteEl.innerHTML = `
      <h2>${note.title}</h2>
      <div class="note-text" id="note-text">
        <p>${note.body}</p>
        <button class="btn">Edit</button>
        <button class="btn">Delete</button>
      </div>
      <span>${this.generateLastEdited(note.changed)}</span>
    `;

    element.appendChild(noteEl);
  }

  generateLastEdited(timeStamp) {
    const start = Date.now() - timeStamp;

    let seconds = Math.floor(start / 1000);

    let minutes = Math.floor(seconds / 60);

    let hours = Math.floor(minutes / 60);

    let text;

    if (hours > 0) {
      text = `last edited ${hours} hours ago`;
    } else if (minutes > 0) {
      text = `last edited ${minutes} minutes ago`;
    } else {
      text = `last edited ${seconds} seconds ago`;
    }

    return text;
  }
}
