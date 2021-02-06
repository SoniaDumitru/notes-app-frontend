document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3001/notes';
    fetch(endPoint)
      .then(res => res.json())
      .then(json =>
        json.forEach(note => {
          const markup = `
            <li>
                <h3>${note.title}
                <button>edit</button>
                </h3>
            </li>`;
          document.querySelector('#notes-list').innerHTML += markup;
        })
      );
  });