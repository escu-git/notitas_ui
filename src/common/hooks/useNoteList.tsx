import { NoteModel } from "@src/models/Notes";
import notesService from "@src/services/notesService";
import { useEffect, useState } from "react";

//This hook is responsible for fetching the notes from api:
//May be reloaded by switching reload parameter.
const useNoteList = ()=>{
    const[notes, setNotes]=useState<NoteModel[]>([]);
    const[reload, setReload]=useState<boolean>(false)

    const fetchAgain = ()=>{
        setReload(!reload)
    }

    const fetchNotes = async()=>{
        const notes = await notesService.getAllNotes();
        setNotes(notes.data);
    }

    useEffect(()=>{
        fetchNotes();
    },[reload])

    return {notes, fetchAgain}
}

export default useNoteList