
const API_URL = import.meta.env.VITE_API_URL

const notesService ={
    getAllNotes: async()=>{
        const response = await fetch(`${API_URL}/notes/getAllNotes`)
        .then(res=> res.json())
        return response
    },
    getNoteById: async()=>{
        const response = await fetch(`${API_URL}/notes/getNoteById`)
        .then(res=>res.json());
        return response
    },
    postNote: async()=>{
        const response = await fetch(`${API_URL}/notes/createNote`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "title": "Preparativos para el viaje",
                "content": "Hacer la maleta, revisar los documentos y comprar billetes de avión.",
                "user": "escuderopablo.dev@gmail.com",
                "category": 3,
                "reminder": {
                  "active": true,
                  "time": "2024-03-20T18:00:00"
                },
                "active": true
              })
        })
        const data = await response.json()
        return data
    },
}

export default notesService;
