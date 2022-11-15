
import React from 'react';
import {useState} from 'react';

function Signup({setUser}) {
const [full_name, setName] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [password_confirmation, setConPassword] = useState('');
const [user_type, setUserType] = useState('');
const [errors, setErrors] = useState([]);
const[formDisplay, setFormDisplay] = useState(true);

            const handleSubmit = (e) => {
                e.preventDefault();
                const user = {
                    full_name: full_name,
                    username: username,
                    email: email,
                    password: password,
                    password_confirmation: password_confirmation,
                    user_type: user_type

                }
                fetch('/users', {
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
                            setUser(user)})
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
        <>
            <h3 onClick={handleClickForm}>Create an account</h3>

            {formDisplay ? null : 
                <div id='formDiv'>
                <form onSubmit={handleSubmit}>
                    <div>
                            <input type= "text" 
                            name="full_name" 
                            placeholder="Full Name" 
                            value={full_name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            <input type= "text"
                                name="username"
                                placeholder="Username" 
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <input type= "text"
                                name="email" 
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type= "text" 
                                name="user_type" 
                                placeholder="User Type" 
                                value={user_type}
                                onChange={(e) => setUserType(e.target.value)}
                            />
                            <input type= "text" 
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input type= "text" 
                                name="conform_password" 
                                placeholder="Conform Password"
                                value={password_confirmation}
                                onChange={(e) => setConPassword(e.target.value)}
                            />
                    </div>
                    <div>
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>  
            
            }
            
            

                <div>
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>

         </>  
    )
}

export default Signup
