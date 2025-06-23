import { useState } from "react";
import noteContext from "./noteContext";

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
    }

    //delete note
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note._id !== id));
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
    }
    //get notes
    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;