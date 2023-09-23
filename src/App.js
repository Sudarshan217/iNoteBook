import './App.css';
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
// import UseEffect from './UseEffect';
import { useState } from 'react';
export default function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(function () {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <HashRouter>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert}/>
          <div className="container">
          <Routes>
            <Route path='/home' element={<div><Home showAlert={showAlert} /></div>} />
            <Route path='/about' element={<div><About/></div>} />
            <Route path='/login' element={<div><Login showAlert={showAlert}/></div>}/>
            <Route path='/signup' element={<div><Signup showAlert={showAlert}/></div>}/>
          </Routes>
          </div>
        </HashRouter>
      </NoteState>
      {/* <UseEffect/> */}
    </>
  )
}

