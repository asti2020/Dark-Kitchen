import React from 'react'
import {ChefProfile} from './ChefProfile'
import Login from './Login'
import { Logout } from './Logout'
// import { useState, useEffect } from 'react';

function Profile({user}) {
    // const [profileChef, setUserChef] = useState({})
    // const [profileOrder, setProfileOrder] = useState({})

   if (user.user_type === 'chef') {
        return(
            <div> <ChefProfile  user={user}/>
                <Logout />
            </div> )

    } else {
        return (
            <div>
                <h3>Profile</h3>
                {/* <UserProfile /> */}
                <Login />
                <Logout />

            </div>
    )
    }
}

export default Profile

