import React from 'react'
import FoodForm from './FoodForm'
// import {useNavigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FoodList } from './FoodList';
import {Logout} from './Logout';
import { NavList } from './NavList';


export const ChefProfile = ({user}) => {
    const navigate = useNavigate()
    console.log(user)
        let token = localStorage.getItem('jwt')
    if (token === '' ){
            navigate('/login')
            console.log("no token found")
            return null
    } else {
        console.log("token found")
        return (
            <>
                {/* <NavList /> */}
                <div id='chefProfileDiv'>
                    <div id='chefProfileForm'>
                        <h3 id='chefH3'>Hello Chef, add some more dishes!</h3>
                        <FoodForm user={user} />
                        <Logout />
                    </div>
                </div>
            </>
        )
    }
}
