import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const { notes, setNotes } = useContext(noteContext);

    return (
        <div className="container">
            <h2 className='mb-3'>Your Notes</h2>
            {notes.map((note, idx) => {
                return (
                    <NoteItem note={note} idx={idx} key={note._id}/>
                );
            })}
        </div>
    )
}

export default Notes
