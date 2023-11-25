import { useState } from "react";
//import Note from "./Note";
import { nanoid } from "nanoid";

function Notes() {
    let [note, setNote] = useState('');
    let [notes, setNotes] = useState([]);

    function showLink(str) {
        let res = '';
        for (let i = 0; (str < 70) ? i <= str : i < 70; i++) {
            res += str[i];
        }

        return res;
    }
    
    function saveClearNote() {
        setNotes([...notes, {id: nanoid(), text: note}]);
        setNote('');
    }
 
    let listLinks = notes.map(
        (note) => (
           <li key={note.id}><a href="#">{showLink(note.text)}</a></li>
        )
    );

    return (
        <div>

            <textarea cols={60} rows={7} value={note} onChange={(event) => setNote(event.target.value)} />
            <p>{note}</p>

            <button onClick={saveClearNote}>Сохранить запись {console.log(notes)}</button>

            <ol>
                {listLinks}
            </ol>
        </div>
    );
}

export default Notes;