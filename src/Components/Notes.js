import React, { useContext, useEffect, useRef, useState } from 'react'
import NotesItems from './Notesitems'
import NoteContext from "../Context/Notes/NoteContext"
import AddNotes from "./AddNotes"
import { useNavigate } from "react-router-dom";
const Notes = (props) => {

    const navigate = useNavigate();
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context

    useEffect(() => {
        if(localStorage.getItem('token')){
                getNotes()    
        }
        else{
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])

    let [note, setNote] = useState({ id: '', etitle: '', edescription: '', etag: '' });

    const ref = useRef(null);
    const refClose = useRef(null);
    const updateNotes = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        
    }

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
        
    }

    const handleClick = () => {
        console.log('updating notes....', note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("success","Updated Successfully")
    }

    return (
        <>
            <AddNotes  showAlert={props.showAlert}/>
            {/* Edit Notes */}
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='container my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>Update Notes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h3>Your Notes</h3>
                <div className="container">
                    {notes.length === 0 && 'No notes to display Here'}
                </div>
                {notes.map((notes) => {
                    return <NotesItems key={notes._id} notes={notes} updateNotes={updateNotes} showAlert={props.showAlert} />
                })}
            </div>
        </>

    )
}

export default Notes
