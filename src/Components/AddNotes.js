import React, { useState } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import { useContext } from 'react'
const AddNotes = (props) => {
    const noteContext = useContext(NoteContext)

    // Destructuring
    const { addNotes } = noteContext

    // useState
    let [note, setNote] = useState({ title: "", description: "", tag: "" })

    // onclick
    const handleClick = (event) => {
        event.preventDefault()
        addNotes(note.title, note.description, note.tag)
        setNote({title:'',description:'',tag:''})
        props.showAlert("success","Added Successfully")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container my-3">
                <h2>Add Your Notes</h2>
                <form className='container my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                    </div>
                    <button disabled = {note.title.length < 5 || note.description.length < 5 } type="submit" className="btn btn-primary" onClick={handleClick}>Add Notes</button>
                </form>
            </div>
        </div>
    )
}

export default AddNotes
