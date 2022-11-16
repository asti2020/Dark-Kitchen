import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

import Signup from './Signup';


function Login({setUser}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState("");
    const[formDisplay, setFormDisplay] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        }
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(user => {
                    localStorage.setItem("jwt", user.token);
                    navigate('/profile')
                })
                    }
        })
    }
    // console.log(errors)

    // const handleClickForm = (e) => {
    //     e.preventDefault();
    //     setFormDisplay(!formDisplay)
    // }

    return (
    <div  id='landingPageDiv'>
        <div id='formDiv'>
            <h1 id='homeH3'>Eat or Cook!</h1>
            <form onSubmit={handleSubmit}>
                <div className='loginInputDiv'>
                    <input className='loginInput' type= "text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='loginInputDiv'>
                    <input className='loginInput' type= "password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='loginBtn'>Login</button>
                {/* <input type="submit" value="Login" /> */}
            </form>
            <p id='homePTage'><span>Or</span></p>
            <Signup/>
        </div>
    </div>
    )
}

export default Login
