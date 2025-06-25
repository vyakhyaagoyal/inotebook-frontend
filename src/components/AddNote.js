import React, { useContext, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Alert from './Alert';


const AddNote = ({}) => {
    const { addNote } = useContext(noteContext);
    const addBtnRef = useRef(null);
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const onChange = (e) => {
        setNote({ ...note, [e.target.id]: e.target.value });
        // console.log(note);
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        const { title, description, tag } = note;

        const finalTag = tag || 'General'; // Default to 'General' if no tag is provided

        if (finalTag && description && title) {
            addNote(title, description, finalTag);
            setNote({ title: "", description: "", tag: "" });
        }
        else if (!finalTag && description && title) {
            const finalTag = 'General';
            addNote(title, description, finalTag);
            setNote({ title: "", description: "", tag: "" });
        } else {
            // Show Bootstrap popover
            if (window.bootstrap) {
                const popover = window.bootstrap.Popover.getOrCreateInstance(addBtnRef.current);
                popover.show();
                setTimeout(() => popover.hide(), 2000); // Hide after 2 seconds
            }
        }
    }

    return (
        <div className='container my-3'>
            <h2>Add a note</h2>
            <label htmlFor="tag" className="form-label">Tag</label>
            <select className="form-select mb-3" aria-label="Default select example" id="tag" onChange={onChange} value={note.tag}>
                <option value="" disabled>Select tag</option>
                <option value="General">General</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <textarea type="text" className="form-control mb-3" id="title" placeholder="Enter title" onChange={onChange} value={note.title} minLength={2} required></textarea>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control mb-3" id="description" placeholder="Enter description" rows="3" onChange={onChange} value={note.description} minLength={5} required></textarea>
                </div>
                <button type="button" className="btn btn-dark my-3" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Please fill all fields" ref={addBtnRef} onClick={handleAddNote} disabled={note.title.length < 2 || note.description.length < 5}>Add Note</button>

                {(note.title.length > 0 && note.title.length < 2) || (note.description.length > 0 && note.description.length < 5) ? (
                    <div className="alert">
                        <Alert message="Title should be more than 2 characters and description should be more than 5 characters." />
                    </div>
                ) : null}
            </div>
        </div>
    )}

export default AddNote