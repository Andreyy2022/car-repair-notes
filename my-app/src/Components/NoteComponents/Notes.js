import { useState } from "react";
//import Note from "./Note";
import { nanoid } from "nanoid";

function Notes() {
    let [note, setNote] = useState('');
    let [notes, setNotes] = useState([]);
/*
    let noteObj = {
        id: nanoid(),
        text: note
    }
*/
    return (
        <div>

            <textarea value={note} onChange={(event) => setNote(event.target.value)} />
            <p>{note}</p>

            <button onClick={() => setNotes([...notes, {id: nanoid(), text: note}])}>Сохранить запись {console.log(notes)}</button>
            <p></p>
        </div>
    );
}

export default Notes;