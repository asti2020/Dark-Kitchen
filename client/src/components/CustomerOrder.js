import React from 'react'
import { FoodList } from './FoodList'

export const CustomerOrder = ({foods}) => {
    return (
        <>
            <h3>Order history</h3>
            <div id='previousOrderGrid'>
                <div className='orderFoodItems'>
                    <div className='imgContainer'>
                        <img className='orderImages' src='https://cdn.cnn.com/cnnnext/dam/assets/160929101749-essential-spanish-dish-paella-phaidon-full-169.jpg' alt='firstDish'/>
                    </div>
                </div>

                <div className='orderInfo'>
                    <h3>Dish</h3>
                    <p>Order #: 1234056</p>
                    <p>Ordered on 12/12/21</p>
                </div>

                <div className='orderFoodItems'>
                    <div className='imgContainer'>
                        <img className='orderImages' src='https://cdn.theculturetrip.com/wp-content/uploads/2017/12/15948659203_50ea09693a_k.jpg' alt='firstDish'/>
                    </div>
                </div>

                <div className='orderInfo'>
                    <h3>Dish 2</h3>
                    <p>Order #: 170056</p>
                    <p>Ordered on 12/10/21</p>
                </div>

                <div className='orderFoodItems'>
                    <div className='imgContainer'>
                        <img className='orderImages' src='https://www.worldatlas.com/r/w1200/upload/b0/9d/b6/shutterstock-642510559.jpg' alt='firstDish'/>
                    </div>
                </div>

                <div className='orderInfo'>
                    <h3>Dish 3</h3>
                    <p>Order #: 143056</p>
                    <p>Ordered on 5/12/22</p>
                </div>

                <div className='orderFoodItems'>
                    <div className='imgContainer'>
                        <img className='orderImages' src='https://blog.amigofoods.com/wp-content/uploads/2020/09/guatemalan-food-dish.jpg' alt='firstDish'/>
                    </div>
                </div>

                <div className='orderInfo'>
                    <h3>Dish 4</h3>
                    <p>Order #: 8874056</p>
                    <p>Ordered on 9/19/22</p>
                </div>

            </div>
        {/* {foods.length > 0 ? <FoodList foods={foods}/>  : <p>No previous order</p>} */}
        </>
    )
}
