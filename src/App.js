import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import Controller from './components/Controller/Controller';
import Headcoach from './components/HeadCoach/Headcoach';
import Coach from './components/Coach/Coach';
import NotesState from './Context/Notes/notesState';
const App = () => {
  return (
    <>
    <NotesState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/admin' element={<div><Admin /></div>} />
            <Route path='/controller' element={<div><Controller /></div>} />
            <Route path='/headcoach' element={<div><Headcoach /></div>} />
            <Route path='/coach' element={<div><Coach /></div>} />
          </Routes>
        </div>
      </BrowserRouter>
      </NotesState>
    </>
  )
}

export default App
