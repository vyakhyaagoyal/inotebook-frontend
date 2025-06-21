import { useState } from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>{

const note={
    name: "John Doe",
    class:"1"
};
const [notes, setNotes] = useState(note);
const update=()=>{
    setTimeout(() => {
        setNotes({
            name: "Juuu Doe",
            class: "2"
        });
    }, 1000);
}

return(
    <noteContext.Provider value={{notes, update}}>
        {props.children}
    </noteContext.Provider>
)
}

export default NoteState;