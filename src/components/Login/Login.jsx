import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        }
  return(
    <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <p>Username</p>
              <input type="text" onChange={ e => setUserName(e.target.value)}/>
          </label>
          </div>
        <div>
          <label>
              <p>Password</p>
              <input type="password" onChange={ e => setPassword(e.target.value)}/>
          </label>
        </div>
        <div style={{textAlign:'center'}}>
            <button type="submit" style={{marginTop:"1em"}} className='btn btn-primary '>Submit</button>
        </div>
        </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }