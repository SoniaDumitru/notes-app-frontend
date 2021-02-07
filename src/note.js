class Note {
    constructor(data) {
      this.id = data.id;
      this.title = data.title;
      this.content = data.content;
      Note.all.push(this);
    }

    static findById(id) {
        return this.all.find(note => note.id === id);
    }
  
    renderListItem() {
      return `
      <li>
        <h3>${this.title}
          <button data-id=${this.id}>edit</button>
        </h3>
      </li>`;
    }
  }
  
  Note.all = [];
