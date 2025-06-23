import React, { useState } from "react";
import noteContext from "./noteContext";
import Toast from "../../components/Toast";

const NoteState = (props) => {
    const hardcodedNotes = [
        {
            "_id": "6848a5c50ccb5e9efee3a6f61",
            "user": "6845f33e856e28203839d7e8",
            "title": "Chemistry",
            "description": "Women in tech dominated field updated",
            "tag": "Techsavvy updated",
            "date": "2025-06-10T21:38:13.584Z",
            "__v": 0
        },
        {
            "_id": "6848a5cc0ccb5e9efee3a6f82",
            "user": "6845f33e856e28203839d7e8",
            "title": "Mathematics",
            "description": "Women in tech dominated field",
            "tag": "Techsavvy",
            "date": "2025-06-10T21:38:20.827Z",
            "__v": 0
        },
        {
            "_id": "6848a5c50ccb5e9efee3a6f63",
            "user": "6845f33e856e28203839d7e8",
            "title": "Chemistry",
            "description": "Women in tech dominated field updated",
            "tag": "Techsavvy updated",
            "date": "2025-06-10T21:38:13.584Z",
            "__v": 0
        },
        {
            "_id": "6848a5cc0ccb5e9efee3a6f84",
            "user": "6845f33e856e28203839d7e8",
            "title": "Mathematics",
            "description": "Women in tech dominated field",
            "tag": "Techsavvy",
            "date": "2025-06-10T21:38:20.827Z",
            "__v": 0
        },
        {
            "_id": "6848a5c50ccb5e9efee3a6f65",
            "user": "6845f33e856e28203839d7e8",
            "title": "Chemistry",
            "description": "Women in tech dominated field updated",
            "tag": "Techsavvy updated",
            "date": "2025-06-10T21:38:13.584Z",
            "__v": 0
        },
        {
            "_id": "6848a5cc0ccb5e9efee3a6f86",
            "user": "6845f33e856e28203839d7e8",
            "title": "Mathematics",
            "description": "Women in tech dominated field",
            "tag": "Techsavvy",
            "date": "2025-06-10T21:38:20.827Z",
            "__v": 0
        },
        {
            "_id": "6848a5c50ccb5e9efee3a6f67",
            "user": "6845f33e856e28203839d7e8",
            "title": "Chemistry",
            "description": "Women in tech dominated field updated",
            "tag": "Techsavvy updated",
            "date": "2025-06-10T21:38:13.584Z",
            "__v": 0
        },
        {
            "_id": "6848a5cc0ccb5e9efee3a6f88",
            "user": "6845f33e856e28203839d7e8",
            "title": "Mathematics",
            "description": "Women in tech dominated field",
            "tag": "Techsavvy",
            "date": "2025-06-10T21:38:20.827Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(hardcodedNotes);
    const [toast, setToast] = useState({
        show: false,
        title: "",
        message: "",
        type: "success"
    });

    //Add note
    const addNote = (title, description, tag) => {
        // console.log("Adding a new note with title:", title, "description:", description, "tag:", tag);
        const newNote = {
            "_id": "1234567890abcdef12345678",
            "user": "6845f33e856e28203839d7e8",
            "title": title,
            "description": description,
            "tag": tag,
            "date": new Date().toISOString(),
            "__v": 0
        }
        setNotes([...notes, newNote]);
        setToast({ show: true, title: "Added note", message: "Note added successfully", type: "success" });
    }

    //delete note
    const deleteNote = (id) => {
        //ask for confirmation
        setNotes(notes.filter(note => note._id !== id));
        setToast({ show: true, title: "Deleted note", message: "Note deleted successfully", type: "success" });
    }

    //edit note
    const editNote = (id, title, description, tag) => {
        const updatedNotes = notes.map(note => {
            if (note._id === id) {
                return { ...note, title, description, tag }
            }
            return note;
        });
        setNotes(updatedNotes);
        setToast({ show: true, title: "Edited note", message: "Note edited successfully", type: "success" });
    }

    React.useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast(t => ({ ...t, show: false })), 1500);
            return () => clearTimeout(timer);
        }
    }, [toast.show]);

    //get notes
    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
            <Toast
                show={toast.show}
                onClose={() => setToast(t => ({ ...t, show: false }))}
                title={toast.title}
                message={toast.message}
                type={toast.type}
            />
        </noteContext.Provider>
    )
}

export default NoteState;