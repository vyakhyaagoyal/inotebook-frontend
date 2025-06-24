import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const NoteItem = ({ note, idx }) => {
    const collapseId = `flush-collapse-${idx}`;
    const headingId = `flush-heading-${idx}`;
    const { deleteNote, editNote } = useContext(noteContext);

    const handleDelete = () => {
        deleteNote(note._id);
    }

    const handleEdit = () => {
        editNote(note._id, note.title, note.description, note.tag);
    }

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
                            {note.title}
                            <span className="badge text-primary-emphasis bg-primary-subtle border border-primary-subtle mx-3">{note.tag}</span>
                        </button>
                        <span>
                            <i className="fa-solid fa-trash mx-1 my-2" onClick={handleDelete}></i>
                            <i className="fa-solid fa-pen-to-square mx-3" onClick={handleEdit}></i>
                        </span>
                    </div>
                </h2>
                <div
                    id={collapseId}
                    className="accordion-collapse collapse"
                    aria-labelledby={headingId}
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body">{note.description}</div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem