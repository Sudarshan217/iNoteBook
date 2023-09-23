import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const locahost = 'http://localhost:5000'

    const notesFirst = []

    let [notes, setNotes] = useState(notesFirst);

    // Add a Note
    const addNotes = async (title, description, tag) => {
        // TODO: Api Call
        const URL = (`${locahost}/api/notes/addnotes`)
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json(); 
        setNotes(notes.concat(json))
    }

    // Get Notes
    const getNotes = async () => {
        // TODO: Api Call
        const URL = (`${locahost}/api/notes/getnotes`)
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body:JSON.stringify()
        })
        const json = await response.json();
        // console.log(json)
        setNotes(json)
    }

    // Edit Note
    const editNote = async (id, title, description, tag) => {
        // Api call
        const URL = (`${locahost}/api/notes/update/${id}`)
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json =  await response.json()
        console.log(json)

        // logic to Edit Notes in client side
        console.log('Edit Notes')
        // Deep copy
        let newNotes = JSON.parse(JSON.stringify(notes))
        
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            console.log(element);
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
            setNotes(newNotes);
        }
    }

    // Delete Note
    const deleteNote = async (id) => {
        // TODO: Api Call
        const URL = (`${locahost}/api/notes/delete/${id}`)
        const response = await fetch(URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
        })
        const json = response.json()
        console.log(json)
        console.log('Delete Note ' + id);
        const newNotes = notes.filter((notes) => { return notes._id !== id });
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNotes, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;

