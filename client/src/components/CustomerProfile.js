import { CustomerOrder } from "./CustomerOrder"
import {useEffect, useState} from 'react'



function CustomerProfile({user}) {
    const [orderFood, setOrder] = useState([])

    useEffect(() => {
        if (user.user_type === 'order') {
            fetch(`/orders`)
                .then(res => res.json())
                .then(res => setOrder(res))
        } else {
            setOrder([])
            console.log('no order')
        }
        
    },[user.user_type])

    return (
        <>
            <h2 id="customerProfileH2">Hello {user.full_name} Welcome!!</h2>
            <CustomerOrder foods={orderFood}/>
        </>
    )
}
export default CustomerProfile

