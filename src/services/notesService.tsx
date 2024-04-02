import { NewNoteModel } from '@src/models/Notes'

const API_URL = import.meta.env.VITE_API_URL

const notesService = {
    getAllNotes: async () => {
        const response = await fetch(`${API_URL}/notes/getAllNotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        }).then((res) => res.json())
        return response
    },
    getNoteById: async () => {
        const response = await fetch(`${API_URL}/notes/getNoteById`).then(
            (res) => res.json(),
        )
        return response
    },
    postNote: async (note: NewNoteModel) => {
        const response = await fetch(`${API_URL}/notes/createNote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(note),
        })
        const data = await response.json()
        return data
    },
    deleteNote: async (id: string) => {
        const response = await fetch(`${API_URL}/notes/deleteNote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        }).then((res) => res.json())
        return response
    },
}

export default notesService
