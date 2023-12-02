import { useState } from "react";
import { nanoid } from "nanoid";
import { useEffect } from "react";

function Notes() {
    let [note, setNote] = useState('');
    let [notes, setNotes] = useState([]);
/*
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('notes'));
        if (data) {
            setNotes(data);
        }
    }, []);
*/
    function showLink(str) {
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
        setNotes([...notes, {id: nanoid(), date: new Date().toLocaleDateString(), text: note, showStr: false}]);
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
                    {noteObj.date} - {noteObj.showStr ? noteObj.text : showLink(noteObj.text)}
                </span>
                <br/>
                { noteObj.showStr ? <button onClick={() => btn(noteObj.id) }>{noteObj.showStr ? 'удалить запись ?' : ''}</button> : '' }
                <br/>
            </p>
        )
    );

    return (
        <div>
            <textarea cols={60} rows={7} value={note} onChange={(event) => setNote(event.target.value)} />
            <button onClick={saveClearNote}>Сохранить запись</button>
            <div>
                {listLinks}
            </div>
        </div>
    );
}

export default Notes;