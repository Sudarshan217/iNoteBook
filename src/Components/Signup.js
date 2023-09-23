import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

  let [value, setValue] = useState({ name: '', email: '', password: '' })

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    const localhost = "http://localhost:5000";
    const URL = (`${localhost}/api/auth/createuser`);
    const { name, email, password } = value
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name:name,email:email,password:password})
    })
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.token)
      navigate('/home')
      props.showAlert("success","Account Created Successfully")
    }
    else {
      props.showAlert("danger","Please Check Your Details",)
    }
  }

  const onChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value })
    console.log(value)
  }
  return (
      <div className='container mt-3'>
            <h2>Create an account to use iNoteBooks</h2>
      <form onSubmit={handleSubmit} style={{marginTop:"35px"}}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" onChange={onChange} name='name' />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" onChange={onChange} name='email' />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" onChange={onChange} name='password' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
