import React from 'react'
import FoodForm from './FoodForm'
import { useNavigate } from 'react-router-dom';
import { FoodList } from './FoodList';
import EditFoodForm from './EditFoodForm';

export const ChefProfile = ({user, newFood}) => {
    let foods = user.products
    const navigate = useNavigate()
    console.log(user)
        let token = localStorage.getItem('jwt')
    if (token === null ){
            navigate('/login')
            console.log("no token found") 
            return null
    } else {
        console.log("token found")
        return (
            <div>
                <h4>Chef Profile</h4>
                <FoodList foods={foods} user={user} />
                <FoodForm newFood={newFood} user={user} />
                <EditFoodForm user={user}/>
            </div>
        )
    }
}
