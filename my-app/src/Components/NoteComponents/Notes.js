import React from "react";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import './styles.css';
import Engine from "./Engine";

function Notes() {
    let [showBlocks, setShowBlockes] = useState(true);
    let [engine, setEngine] = useState(false);
    let [chassis, setChassis] = useState(false);
    let [transmission, setTransmission] = useState(false);
    let [carcase, setCarcase] = useState(false);

    let blocks = <>
                <div className="box" onClick={() => setEngine(true)}>Двигатель</div>
                <div className="box" onClick={() => setChassis(true)}>Ходовая система</div>
                <div className="box" onClick={() => setTransmission(true)}>Трансмиссия</div>
                <div className="box" onClick={() => setCarcase(true)}>Кузов/салон</div>
                </>;

    return (
        <div className="choice" /*onClick={() => setShowBlockes(false)}*/>
            {
                engine ? <Engine /> : blocks || chassis ? <Chassis /> : blocks || transmission ? <Transmission /> : blocks || transmission ? <Carcase /> : blocks
            }
        </div>
    );
}

export default Notes;
/*    
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

export default Notes;
*/
