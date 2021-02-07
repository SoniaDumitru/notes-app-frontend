class App {
    attachEventListeners() {
      document.querySelector('#notes-list').addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const note = Note.findById(id);
        document.querySelector('#update').addEventListener('submit', e => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const note = Note.findById(id);
            const title = e.target.querySelector('input').value;
            const content = e.target.querySelector('textarea').value;
      
            const bodyJSON = { title, content };
            fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify(bodyJSON),
            })
              .then(res => res.json())
              // our backend responds with the updated note instance represented as JSON
              .then(updatedNote => console.log(updatedNote));
          });
      });
    }
  }