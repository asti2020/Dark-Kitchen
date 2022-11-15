
import '../App.css';
import Signup from './Signup';
import { useState, useEffect } from 'react';
import  Login  from './Login';
import  { Logout }  from './Logout';
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
// import NavList from './NavList';
import  Profile  from './Profile';


function App() {
  const [user, setUser] = useState({});
  const jwt_token = localStorage.getItem("jwt");
  console.log(jwt_token);
  useEffect(() => {
    fetch('/me',{
      method: 'GET',
      headers: {
        Authorization: "Bearer " + jwt_token,
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(user => setUser(user))

  }, [ jwt_token])

  console.log(user.user_type)
  return (
    <div className="App" >
    <Routes>
        {/* <Route exact path="/"  element={<Home user={user} />} /> */}
        {/* <Route exact path="/home"  element={<Home user={user}/>} /> */}
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} /> 
        {/* <Route path="/Profile" element={<Profile setUser={setUser} />} /> */}

    </Routes>
    </div>
  );
}
export default App;
