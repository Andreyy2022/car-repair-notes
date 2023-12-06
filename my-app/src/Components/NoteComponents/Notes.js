import { useState } from "react";
import { nanoid } from "nanoid";
import './styles.css';

function Notes() {
    let [note, setNote] = useState('');
    let [notes, setNotes] = useState(localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []);

    function showNote(str) {
        let res = '';
        for (let i = 0; str.length < 70 ? i < str.length : i < 70; i++) {
            res += str[i];
        }

        if (res.length < 70) {
            return res;
        } else {
            return res + '...';
        }
    }
    
    function saveClearNote() {
        localStorage.setItem(
            'notes', JSON.stringify([...notes, {id: nanoid(), date: new Date().toLocaleDateString(), text: note, showStr: false}])
        );
        setNotes( JSON.parse(localStorage.getItem('notes')) );
        
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

    function btnDel(id) {
        localStorage.setItem( 'notes', JSON.stringify(notes.filter(noteObj => noteObj.id !== id)) );
        setNotes( JSON.parse(localStorage.getItem('notes')) );
    }

    let listNotes = notes.map(
        noteObj => (
            <p key={noteObj.id}>
                <span className="showStr" onClick={() => showHideStr(noteObj.id)}>
                    {noteObj.date} - {noteObj.showStr ? noteObj.text : showNote(noteObj.text)}
                </span>
                <br/>
                { noteObj.showStr ? <button onClick={() => btnDel(noteObj.id) }>{noteObj.showStr ? 'удалить запись ?' : ''}</button> : '' }
                <br/>
            </p>
        )
    );

    return (
        <div className="preBody">
            <textarea cols={60} rows={7} value={note} onChange={(event) => setNote(event.target.value)} />
            <button onClick={saveClearNote}>Сохранить запись</button>
            <div>
                {listNotes}
            </div>
        </div>
    );
}

export default Notes;