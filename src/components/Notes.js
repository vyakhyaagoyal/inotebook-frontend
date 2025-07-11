import React, { useEffect, useContext, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
// import { useNavigate } from 'react-router-dom';

const Notes = ({ search }) => {
    const userName = localStorage.getItem('userName');
    const { notes, getNotes, editNote } = useContext(noteContext);
    const ref = useRef(null);
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const [originalNote, setOriginalNote] = useState({ title: "", description: "", tag: "" });

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    const updateNoteHandler = (currentNote) => {
        ref.current.click();
        setNote(currentNote);
        setOriginalNote(currentNote);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.id]: e.target.value });
        // console.log(note);
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        ref.current.click(); // Close the modal after editing
        const values = { title: note.title, description: note.description, tag: note.tag };

        if (values.tag && values.description && values.title) {
            editNote(note._id, values.title, values.description, values.tag);
            setNote(note => ({ ...note, title: "", description: "", tag: "" }));
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Open modal</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <textarea type="text" className="form-control mb-3" id="title" placeholder="Enter title" onChange={onChange} value={note.title} minLength={2} required></textarea>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control mb-3" id="description" placeholder="Enter description" rows="3" onChange={onChange} value={note.description} minLength={5} required></textarea>
                                </div>

                                <label htmlFor="tag" className="form-label">Tag</label>
                                <select className="form-select mb-3" aria-label="Default select example" id="tag" onChange={onChange} value={note.tag}>
                                    <option value="" disabled>Select tag</option>
                                    <option value="General">General</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Educational">Educational</option>
                                    <option value="Work">Work</option>
                                    <option value="Health">Health</option>
                                    <option value="Technical">Technical</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleAddNote} disabled={note.title === originalNote.title &&
                                    note.description === originalNote.description &&
                                    note.tag === originalNote.tag}>Edit note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className='mb-3'>{userName ? `${userName}'s` : "Your"} Notes</h2>
                {filteredNotes.length === 0 && <p>No notes available</p>}
                {filteredNotes.map((note, idx) => {
                    return (
                        <NoteItem note={note} idx={idx} key={note._id} onEditClick={updateNoteHandler} />
                    );
                })}
            </div>
        </>
    );
}

export default Notes