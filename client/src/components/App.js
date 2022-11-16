
import '../App.css';
import Signup from './Signup';
import { useState, useEffect } from 'react';
import  Login  from './Login';
import  { Logout }  from './Logout';
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
// import NavList from './NavList';
import  Profile  from './Profile';
import {useNavigate} from 'react-router-dom'
import NavList from './NavList';
import Cart from './Cart';


function App() {
  const navigate = useNavigate()
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

const[count, setCount] = useState(0)

const handleCount = () => {
  setCount(count + 1)
}

    console.log(user.user_type)
    return (
      <div className="App" >
        <div className='myNav'>
        <NavList count={count}/>
        </div>
      <Routes>
          <Route exact path="/"  element={<Home user={user} />} />
          <Route exact path="/home"  element={<Home onClick={handleCount} user={user}/>} />
          <Route exact path="/cart"  element={<Cart user={user}/>} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/logout" element={<Logout setUser={setUser} />} />
          {user ? <Route path="/profile" element={<Profile user={user} />} /> : navigate('/login')}

      </Routes>
      </div>
    );
}
export default App;
