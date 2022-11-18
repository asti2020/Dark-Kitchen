import React from 'react'
import  CartDataSup  from './CartDataSup.js'

function CartData({count, foods}) {
  return (
    <div>
     

        <CartDataSup foods={foods} count={count} />
       
    </div>
  )
}
export default CartData

