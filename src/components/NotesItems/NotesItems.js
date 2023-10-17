import React, { useContext } from 'react'
import noteContext from '../Context/Notes/NoteContext';
const Notesitems = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context
    const { notes, updateNotes } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{notes.title}</h5>
                    <p className="card-text">{notes.description};</p>
                    <i className="fa-regular fa-trash-can mx-2" onClick={() => {deleteNote(notes._id);props.showAlert("success","Deleted Successfully")}}></i>
                    <i className="fa-solid fa-file-pen mx-2" onClick={() => { updateNotes(notes) }} ></i>
                </div>
            </div>
        </div>
    )
}

// how to write style width
// style={{width: '18rem'}}

export default Notesitems
