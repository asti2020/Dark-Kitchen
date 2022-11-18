import React from 'react'
import { FoodList } from './FoodList'

export const CustomerOrder = ({foods}) => {
    return (
        <>
        <h3>Order history</h3>
        {foods.length > 0 ? <FoodList foods={foods}/>  : <p>No previous order</p>}
        </>
    )
}
