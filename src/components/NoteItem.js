import React from 'react'

const NoteItem = ({ note, idx }) => {
    const collapseId = `flush-collapse-${idx}`;
    const headingId = `flush-heading-${idx}`;
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
                            <span className="badge bg-secondary mx-3">{note.tag}</span>
                        </button>
                        <span>
                            <button type="button" className="btn btn-dark mx-1">Update</button>
                            <button type="button" className="btn btn-dark mx-1">Delete</button>
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
