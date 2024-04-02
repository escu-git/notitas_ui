export interface NoteModel {
    _id: string
    title: string
    content: string
    timestamp: Date
    user: string
    reminder: {
        active: boolean
        date: Date
        notification_type?: string // Optional
    }
    category: number
    active: boolean
}

export interface NewNoteModel {
    title: string
    content: string
    user: string
    category: number
    reminder: {
        active: boolean
        date: Date
        notification_type: string
    }
    active: boolean
}
