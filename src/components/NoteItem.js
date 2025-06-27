import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const NoteItem = ({ note, idx,onEditClick }) => {
    const collapseId = `flush-collapse-${idx}`;
    const headingId = `flush-heading-${idx}`;
    const { deleteNote } = useContext(noteContext);

    const handleDelete = () => {
        deleteNote(note._id);
    }

    // const {updateNote}=note;

    return (
        <div className="accordion accordion-flush mb-2" id="accordionFlushExample">
            <div className="accordion-item border border-1 border-tertiary">
                <h2 className="accordion-header" id={headingId}>
                    <div className="d-flex align-items-center justify-content-between">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded="false"
                            aria-controls={collapseId}
                            style={{ flex: 1 }}
                        >
                            Note Title: {note.title}
                            <span className="badge text-primary-emphasis bg-primary-subtle border border-primary-subtle mx-3">{note.tag}</span>
                        </button>
                        <span>
                            <i className="fa-solid fa-trash mx-2 my-2" onClick={handleDelete}></i>
                            <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{onEditClick(note)}}></i>
                        </span>
                    </div>
                </h2>
                <div
                    id={collapseId}
                    className="accordion-collapse collapse"
                    aria-labelledby={headingId}
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body">Description: {note.description}</div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem