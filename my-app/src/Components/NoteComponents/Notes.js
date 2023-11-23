import { useState } from "react";
//import Note from "./Note";
import { nanoid } from "nanoid";

function Notes() {
    let [note, setNote] = useState('');
    let [notes, setNotes] = useState([]);

    let listLink = notes.map(
        (note) => (
           <li key={note.id}><a href="#">{note.text}</a></li>
        )
    );

    return (
        <div>

            <textarea value={note} onChange={(event) => setNote(event.target.value)} />
            <p>{note}</p>

            <button onClick={() => setNotes([...notes, {id: nanoid(), text: note}])}>Сохранить запись {console.log(notes)}</button>

            <ol>
                {listLink}
            </ol>
        </div>
    );
}

export default Notes;