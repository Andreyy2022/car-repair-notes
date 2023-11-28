import { useState } from "react";
//import Note from "./Note";
import { nanoid } from "nanoid";

function Notes() {
    let [note, setNote] = useState('');
    let [notes, setNotes] = useState([]);
//    let [isIt, setIsIt] = useState(false);

    function showLink(str) {
        let res = '';
        for (let i = 0; (str < 70) ? i <= str : i < 70; i++) {
            res += str[i];
        }

        return res;
    }
    
    function saveClearNote() {
        setNotes([...notes, {id: nanoid(), text: note, showStr: false}]);
        setNote('');
    }

    function showHideStr(id) {
        setNotes(notes.map(noteObj => {
            if (noteObj.id === id) {
                noteObj.showStr = !noteObj.showStr;
            }

            return noteObj;
        }));
    }

    function btn(id) {
        return <button onClick={() => setNotes( notes.filter(noteObj => noteObj.id !== id) )}>удалить запись ?</button>
    }
 
    let listLinks = notes.map(
        noteObj => (
            <li key={noteObj.id} onClick={() => showHideStr(noteObj.id)}>
                {noteObj.showStr ? noteObj.text : (showLink(noteObj.text) + '...')}<br/>{noteObj.showStr ? btn(noteObj.id) : ''}
            </li>
        )
    );

    return (
        <div>
            <textarea cols={60} rows={7} value={note} onChange={(event) => setNote(event.target.value)} />

            <button onClick={saveClearNote}>Сохранить запись {console.log(notes)}</button>

            <ol>
                {listLinks}
            </ol>
        </div>
    );
}

export default Notes;