import React, { useContext,useRef,useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const { addNote } = useContext(noteContext);
    const addBtnRef = useRef(null);
    const [note,setNote]=useState({title:"",description:"",tag:""});

    const onChange = (e) => {
        setNote({...note,[e.target.id]:e.target.value});
        // console.log(note);
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        const { title, description, tag } = note;

        if (tag && description && title) {
            addNote(title, description, tag);
            setNote({ title: "", description: "", tag: "" });
        }
        else if (!tag && description && title) {
            const tag = 'General';
            addNote(title, description, tag);
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
                <textarea className="form-control" id="title" rows="3" placeholder="Enter title" onChange={onChange}></textarea>

                <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Enter description" onChange={onChange} />
            </div>
                <button type="button" className="btn btn-dark my-3" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Please fill all fields" ref={addBtnRef} onClick={handleAddNote}>Add Note</button>
            </div>
        </div>
    )
}

export default AddNote
