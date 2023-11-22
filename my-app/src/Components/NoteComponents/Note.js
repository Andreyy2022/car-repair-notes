import { useState } from "react";

function Note() {
    let [note, setNote] = useState('');

    return (
        <div>
            <textarea value={note} onChange={(event) => setNote(event.target.value)} />
            <p>{note}</p>
        </div>
    );
}

export default Note;