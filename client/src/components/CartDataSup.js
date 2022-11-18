import React from 'react'

function CartDataSup({count}) {
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
                <tr>
                    <td>1</td>
                    <td>Image</td>
                    <td>Apple</td>
                    <td>{count}</td>
                    <td>1.99</td>
                </tr>
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
