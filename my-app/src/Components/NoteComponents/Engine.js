import React from "react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import './styles.css';

function Engine({note, notes, doNote}) {

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
        setDoNote(false);
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
                { noteObj.showStr ? <button className="btnDel" onClick={() => btnDel(noteObj.id) }>{noteObj.showStr ? 'удалить запись ?' : ''}</button> : '' }
                <br/>
            </p>
        )
    );

    let inpAndButt = <div>
        <textarea cols={60} rows={7} value={note} onChange={(event) => setNote(event.target.value)} onBlur={() => setTimeout( () => setDoNote(false), 200 )}/>
        <button className="saveNote" onClick={saveClearNote}>Сохранить запись</button>
    </div>;

    function changeDoNote() {
        if (!doNote) {
            setDoNote(true);
        }
    }

    useEffect(() => {
        function handleEsc(event) {
            if (event.key === 'Escape') {
                setDoNote(false);
            }
        }
        window.addEventListener('keydown', handleEsc);
    }, []);

    return (
        <div>
            <button className="inpNote" onClick={changeDoNote}>{doNote ? inpAndButt : 'Внести запись'}</button>
            <div>
                {listNotes}
            </div>
        </div>
    );
}

export default Engine;