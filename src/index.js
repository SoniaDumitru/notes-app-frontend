document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();
    const endPoint = 'http://localhost:3001/notes';
    fetch(endPoint)
      .then(res => res.json())
      .then(json =>
        json.forEach(note => {
          const newNote = new Note(note);
          document.querySelector('#notes-list').innerHTML += newNote.renderListItem();
        })
      );
  });