import React, { useState, useEffect } from "react";
import noteContext from "./noteContext";
import Toast from "../../components/Toast";

const NoteState = (props) => {
    const host = 'http://localhost:5000';

    const [notes, setNotes] = useState([]);
    const [toast, setToast] = useState({
        show: false,
        title: "",
        message: "",
        type: ""
    });

    //Get all notes
    const getNotes = async () => {

        //fetch API
        const response = await fetch(`${host}/api/notes/fetchallnotes`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0NWYzM2U4NTZlMjgyMDM4MzlkN2U4In0sImlhdCI6MTc0OTQ1NTM3MH0.ymhP2LIaVqOH239M4EhXdRgVEcEgUUZpvvarEAHHmY4'
                },

            }
        )

        const json = await response.json();
        // console.log("Notes fetched successfully:", json);
        setNotes(json);
    }

    //Add note
    const addNote = async (title, description, tag) => {
        // console.log("Adding a new note with title:", title, "description:", description, "tag:", tag);

        //fetch API
        const response = await fetch(`${host}/api/notes/createnote`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0NWYzM2U4NTZlMjgyMDM4MzlkN2U4In0sImlhdCI6MTc0OTQ1NTM3MH0.ymhP2LIaVqOH239M4EhXdRgVEcEgUUZpvvarEAHHmY4'
                },
                body: JSON.stringify({ title, description, tag })
            },

        );
        //         const data = await response.json();
        //   console.log("Response data:", data);

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
        // response.ok && console.log("Note added successfully:", newNote);
        setToast({ show: true, title: "Added note", message: "Note added successfully", type: "success" });
    }

    //delete note
    const deleteNote = async (id) => {

        //fetch API
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0NWYzM2U4NTZlMjgyMDM4MzlkN2U4In0sImlhdCI6MTc0OTQ1NTM3MH0.ymhP2LIaVqOH239M4EhXdRgVEcEgUUZpvvarEAHHmY4'
                },

            }
        )

        //ask for confirmation
        setNotes(notes.filter(note => note._id !== id));
        setToast({ show: true, title: "Deleted note", message: "Note deleted successfully", type: "success" });
    }

    //edit note
    const editNote = async (id, title, description, tag) => {

        //fetch API
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0NWYzM2U4NTZlMjgyMDM4MzlkN2U4In0sImlhdCI6MTc0OTQ1NTM3MH0.ymhP2LIaVqOH239M4EhXdRgVEcEgUUZpvvarEAHHmY4'
                },
                body: JSON.stringify({ title, description, tag })
            }
        )

        const updatedNotes = notes.map(note => {
            if (note._id === id) {
                return { ...note, title, description, tag }
            }
            return note;
        });
        setNotes(updatedNotes);
        setToast({ show: true, title: "Edited note", message: "Note edited successfully", type: "success" });
    }

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast(t => ({ ...t, show: false })), 1500);
            return () => clearTimeout(timer);
        }
    }, [toast.show]);

    //get notes
    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
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