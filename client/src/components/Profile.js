import React from 'react'
import {ChefProfile} from './ChefProfile'
import CustomerProfile from './CustomerProfile'
import Login from './Login'
import { Logout } from './Logout'
import {useNavigate} from 'react-router-dom'
// import { useState, useEffect } from 'react';

function Profile({user, newFood}) {
    const navigate = useNavigate()

    if (user.user_type ==='chef') {
        return(
            <> <ChefProfile newFood={newFood}  user={user}/>
            </> )
    } else if (user.user_type === 'order') {
        return (
            <div>
                <h3>Customer Profile</h3>
                <CustomerProfile  user={user}/>
            </div>
    )
    

    } else {
        return (
            <div>
                <Login />
            </div>
        )

    }
    
    }

export default Profile

