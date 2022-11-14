
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
const [confirmPassword, setConPassword] = useState('');
const [userType, setUserType] = useState('');
const [errors, setErrors] = useState([]);

            const handleSubmit = (e) => {
                e.preventDefault();
                const user = {
                    fullName,
                    userName,
                    email,
                    password,
                    confirmPassword,
                    userType

                }
                fetch('')
                console.log(user);
                    setErrors([]);

            }
console.log(errors)

    return (
        <>
        <div id='topRow' className='row'></div>
        <div className='signupLogin'>
            <h3>Eat or Cook!</h3>
            <form onSubmit={handleSubmit}>
                        <div id='fullName'>
                            <input type= "text" 
                            name="full_name" 
                            placeholder="Full Name" 
                            value={fullName}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div id='username'>
                            <input type= "text"
                                name="username"
                                placeholder="Username" 
                                value={userName}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div id='email'>
                            <input type= "text"
                                name="email" 
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div id='userType'>
                            <input type= "text" 
                                name="user_type" 
                                placeholder="User Type" 
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                            />
                        </div>
                        <div id='password'>
                            <input type= "text" 
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div id='confirm'>
                            <input type= "text" 
                                name="confirm_password" 
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button id='signupBtn' type="submit">Signup</button>
                        </div>
                         <p><span>Or</span></p>

                         <a id='loginBtn' href='/'>Already have an account?</a>

                </form>

        </div>
        </>
    )
}

export default Signup
