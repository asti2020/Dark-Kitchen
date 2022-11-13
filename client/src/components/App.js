
import '../App.css';
import Signup from './Signup';
import { useState, useEffect } from 'react';
import  Login  from './Login';
import  { Logout }  from './Logout';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import NavList from './NavList';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(user => setUser(user))
      }
    })
  }, [])

  console.log(user)
  return (
    <div className="App" >
      <h4>Dark Kitchen</h4>
      <NavList user={user} setUser={setUser}/>
      {user ?  <Login setUser={setUser} /> : <Signup setUser={setUser} />}
      {user ? <Logout setUser={setUser} /> : <Login setUser={setUser} />}
      {/* <Signup setUser={setUser} /> */}

    </div>
  );
}

export default App