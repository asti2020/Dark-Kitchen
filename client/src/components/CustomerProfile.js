import { CustomerOrder } from "./CustomerOrder"
import {useEffect, useState} from 'react'



function CustomerProfile({user}) {
    const [orderFood, setOrder] = useState([])
    const jwt_token = localStorage.getItem("jwt");
    useEffect(() => {
        if (user.user_type === 'order') {
            fetch(`/orders`,{
                headers: {
                    Authorization: "Bearer " + jwt_token,
                    'Content-Type': 'application/json'
                }
            })

                .then(res => res.json())
                .then(res => setOrder(res))
        } else {
            setOrder([])
            console.log('no order')
        }
        
    },[])
    console.log(orderFood)
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

