import React from 'react'
import NavList from './NavList';

function Cart() {
    return (
        <div id='cartDiv'>
            <NavList />
            <div id='cartGridContainer'>
                <div className='orderFoodItems'>
                <div className='imgContainer'>
                    <img className='orderImages' src='https://cdn.theculturetrip.com/wp-content/uploads/2017/12/15948659203_50ea09693a_k.jpg' alt='cart'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
