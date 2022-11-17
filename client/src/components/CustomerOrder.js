import React from 'react'
import { FoodList } from './FoodList'

export const CustomerOrder = ({foods}) => {
    return (
        <>
        <div>Order history</div>
        {foods.length > 0 ? <FoodList foods={foods}/>  : <h5>No previous order</h5>}
        </>
    )
}
