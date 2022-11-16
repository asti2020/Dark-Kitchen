import React from 'react'
import {ChefProfile} from './ChefProfile'
import Login from './Login'
//import { Logout } from './Logout'
import { useState, useEffect } from 'react';

function Profile({user}) {
    const [profileChef, setUserChef] = useState({})
    const [profileOrder, setProfileOrder] = useState({})

    // if(user === 'undefined' || user === null) {
    //     user = localStorage.getItem('jwt');       
    // }
   if (user.user_type === 'chef') {
        return <> <ChefProfile  user={user}/>
         </>
    } else {
    return (
        <div id='profilePageDiv'>


            <div id='leftItem'>

            </div>

            <div id='middleColumn'>

            </div>

            <div id='rightColumn'>

            </div>
            
            {/* <ChefProfile /> */}
            {/* <Login />
            <Logout /> */}

        </div>
    )
    }
}





    // return (
    //     <div>
    //         if(user.user_type ==="chef"){
    //             <ChefProfile user={user}/>
    //         } else {
    //             <Login />
    //         }

    //     </div>
    // )


//     // let token = localStorage.getItem('jwt')
//     if (user.user === 'undefined' ){
//         return <div> <Login /> </div>
//     } else {
//     return (
//         <div>
//             <h3>Profile</h3>
//             <ChefProfile />
//         </div>
//     )
//     }
// }
// if user.user_type === 'chef'
//     return <ChefProfile />
// else
//     return <CustomerProfile />
// end
export default Profile

