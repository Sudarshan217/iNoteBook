// import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = (props) => {

  let location = useLocation();
  const navigate = useNavigate()

  const handleLogout = ()=>{
    props.showAlert("success","Logout Successfully")
    localStorage.removeItem('token');
    navigate('/login')
  }
  // useEffect(()=>{
  //   // console.log(location.pathname);
  //   // Location.pathname
  // },[location])

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">iNoteBooks</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ""}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about" ? "active":""}`} to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex">
      <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary" style={{marginRight:'10px'}} to="/signup" role="button">Signup</Link>
      </form>:<button className="btn btn-primary" onClick={handleLogout} >Logout</button>}
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar


