import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const hardcodedNotes = [
        {
            "_id": "6848a5c50ccb5e9efee3a6f6",
            "user": "6845f33e856e28203839d7e8",
            "title": "Chemistry",
            "description": "Women in tech dominated field updated",
            "tag": "Techsavvy updated",
            "date": "2025-06-10T21:38:13.584Z",
            "__v": 0
        },
        {
            "_id": "6848a5cc0ccb5e9efee3a6f8",
            "user": "6845f33e856e28203839d7e8",
            "title": "Mathematics",
            "description": "Women in tech dominated field",
            "tag": "Techsavvy",
            "date": "2025-06-10T21:38:20.827Z",
            "__v": 0
        },
        {
            "_id": "6848a5c50ccb5e9efee3a6f6",
            "user": "6845f33e856e28203839d7e8",
            "title": "Chemistry",
            "description": "Women in tech dominated field updated",
            "tag": "Techsavvy updated",
            "date": "2025-06-10T21:38:13.584Z",
            "__v": 0
        },
        {
            "_id": "6848a5cc0ccb5e9efee3a6f8",
            "user": "6845f33e856e28203839d7e8",
            "title": "Mathematics",
            "description": "Women in tech dominated field",
            "tag": "Techsavvy",
            "date": "2025-06-10T21:38:20.827Z",
            "__v": 0
        },
        {
            "_id": "6848a5c50ccb5e9efee3a6f6",
            "user": "6845f33e856e28203839d7e8",
            "title": "Chemistry",
            "description": "Women in tech dominated field updated",
            "tag": "Techsavvy updated",
            "date": "2025-06-10T21:38:13.584Z",
            "__v": 0
        },
        {
            "_id": "6848a5cc0ccb5e9efee3a6f8",
            "user": "6845f33e856e28203839d7e8",
            "title": "Mathematics",
            "description": "Women in tech dominated field",
            "tag": "Techsavvy",
            "date": "2025-06-10T21:38:20.827Z",
            "__v": 0
        },
        {
            "_id": "6848a5c50ccb5e9efee3a6f6",
            "user": "6845f33e856e28203839d7e8",
            "title": "Chemistry",
            "description": "Women in tech dominated field updated",
            "tag": "Techsavvy updated",
            "date": "2025-06-10T21:38:13.584Z",
            "__v": 0
        },
        {
            "_id": "6848a5cc0ccb5e9efee3a6f8",
            "user": "6845f33e856e28203839d7e8",
            "title": "Mathematics",
            "description": "Women in tech dominated field",
            "tag": "Techsavvy",
            "date": "2025-06-10T21:38:20.827Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(hardcodedNotes);

    return (
        <noteContext.Provider value={{ notes,setNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;