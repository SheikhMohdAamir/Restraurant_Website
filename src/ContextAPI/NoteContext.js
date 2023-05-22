import { createContext } from "react";

const NoteContext= createContext(
    {
        items:[],
        addItems:(()=>{}),
        removeItems:(()=>{}),
        message:'Here I AM'
    }
)

export default NoteContext;