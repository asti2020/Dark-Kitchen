import React from 'react'
import FoodForm from './FoodForm'
import { useNavigate } from 'react-router-dom';
import { FoodList } from './FoodList';
import EditFoodForm from './EditFoodForm';
import NavList from './NavList';

export const ChefProfile = ({user, newFood}) => {
    const navigate = useNavigate()
    console.log(user)
        let token = localStorage.getItem('jwt')
    if (token === null ){
            navigate('/login')
            console.log("no token found") 
            return null
    } else {
        return (
            <>
                <div id='chefProfileDive'>
                    <div id='chefProfileForm'>
                        <h3 id='chefH3'>Hello Chef, add some more dishes!</h3>
                        {/* <FoodList foods={foods} user={user} /> */}
                        <FoodForm newFood={newFood} user={user} />
                        {/* <EditFoodForm user={user}/> */}
                    </div>
                </div>
            </>
        )
    }
}
