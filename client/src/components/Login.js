import React from 'react'
import {useState} from 'react'

function Login({setUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState("");
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
                    localStorage.setItem('jwt', user.jwt)
                    setUser(user)
                })
            } else {
                res.json()
                .then(er => setErrors(er.errors))
            }     
        })
    }
    console.log(errors)

    const handleClickForm = (e) => {
        e.preventDefault();
        setFormDisplay(!formDisplay)
    }

    return (
        <div>
            <h3 onClick={handleClickForm}>Login</h3>
            { formDisplay ? null :
            <form onSubmit={handleSubmit}>
                <div>
                    <input type= "text" 
                    name="username" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <input type= "password" 
                    name="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Login" />
            </form>
            }
        </div>
    )
}

export default Login
