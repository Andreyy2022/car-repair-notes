import { useState } from "react";
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
        setNotes( notes.filter(noteObj => noteObj.id !== id) );
    }

    let listLinks = notes.map(
        noteObj => (
            <p key={noteObj.id} >
            <span onClick={() => showHideStr(noteObj.id)}>
                {noteObj.showStr ? noteObj.text : (showLink(noteObj.text) + '...')}
            </span>
            <button onClick={() => btn(noteObj.id) }>{noteObj.showStr ? 'удалить запись ?' : ''}</button>
            </p>
        )
    );

    return (
        <div>
            <textarea cols={60} rows={7} value={note} onChange={(event) => setNote(event.target.value)} />
            <button onClick={saveClearNote}>Сохранить запись</button>
            {console.log(notes)}
            <div>
                {listLinks}
            </div>
        </div>
    );
}

export default Notes;