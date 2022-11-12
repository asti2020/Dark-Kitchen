
// import ReactDOM from'react-dom';
import React from 'react';
import {useState} from 'react';

// import { Provider } from'react-redux';
// import { createStore, applyMiddleware } from'redux';    

function Signup() {

const [fullName, setName] = useState('');
const [userName, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [conformPassword, setConPassword] = useState('');
const [userType, setUserType] = useState('');
const [errors, setErrors] = useState([]);

            const handleSubmit = (e) => {
                e.preventDefault();
                const user = {
                    fullName,
                    userName,
                    email,
                    password,
                    conformPassword,
                    userType

                }
                fetch('')
                console.log(user);
                    setErrors([]);

            }
console.log(errors)

    return (
        <div>
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
                        <div>
                            <input type= "text" 
                            name="full_name" 
                            placeholder="Full Name" 
                            value={fullName}
                            onChange={(e) => setName(e.target.value)}
                            />
                            <input type= "text"
                                name="username"
                                placeholder="Username" 
                                value={userName}
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
                                value={userType}
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
                                value={conformPassword}
                                onChange={(e) => setConPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit">Signup</button>
                        </div>

                </form>

        </div>
    )
}

export default Signup
