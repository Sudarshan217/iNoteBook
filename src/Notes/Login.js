import React, { useState } from 'react'

const Login = () => {
    let [credentials, setCredentials] = useState({ email: '', password: '' })
    const localhost = 'http://localhost:5000'

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Click');
        const URL = (`${localhost}/api/auth/login`)
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email:credentials.email, password:credentials.password})
        })
        console.log(response);
        const json = await response.json();
        console.log(json);
        setCredentials({email:'',password:''});
    }

    const onChange = (event) => {
        console.log('on change')
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login

