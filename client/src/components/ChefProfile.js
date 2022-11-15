import React from 'react'
import FoodForm from './FoodForm'
// import {useNavigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FoodList } from './FoodList';


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
            <div>
                <h4>Chef Profile</h4>
                <FoodForm user={user} />
            </div>
        )
    }
}