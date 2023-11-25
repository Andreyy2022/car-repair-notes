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
        (noteObj) => (
           <li key={noteObj.id} onClick={() => alert(noteObj.text)}><a href="#">{showLink(noteObj.text) + '...'}</a></li>
        )
    );

    return (
        <div>
            <textarea cols={60} rows={7} value={note} onChange={(event) => setNote(event.target.value)} />
            <p id="show"></p>

            <button onClick={saveClearNote}>Сохранить запись {console.log(notes)}</button>

            <ol>
                {listLinks}
            </ol>
        </div>
    );
}

export default Notes;