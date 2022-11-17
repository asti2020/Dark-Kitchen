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
        <div>
            <h5>Hello {user.full_name} Welcome!!</h5>
        </div>
        <CustomerOrder foods={orderFood}/>
        </>
    )
}
export default CustomerProfile

