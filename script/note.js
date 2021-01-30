class Note {
  constructor(title, body, created, changed, id) {
    this.title = title;
    this.body = body;
    this.created = created;
    this.changed = changed;
    this.id = id;
  }

  //generate id
  generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
