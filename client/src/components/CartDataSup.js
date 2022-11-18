import React from 'react'

function CartDataSup({count, foods}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>foodImage</th>
                        <th>Food Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
               <tbody>
                  { foods?.map((food, i) => {
                    return(
                            
                    <tr key={i}>
                        <td>{food.count}</td>
                        <td className='CartImag'>{<img src={food.picture}/>}</td>
                        <td>{food.food_name}</td>
                        <td>{count}</td>
                        <td>{food.price}</td>
                    </tr>
                    )})}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th>$Total.price</th>
                        <th>Total</th>

                    </tr>
                    </tfoot>
                </table>
                <button type="button" className="btn btn-primary">Request Order</button>
        </div>
  )
}
export default CartDataSup
