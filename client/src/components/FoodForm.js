import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

function FoodForm({ user }) {
    const navigate = useNavigate();
    const[foodName, setFoodName] = useState("")
    const[foodPrice, setPrice] = useState("")
    const[ingreDients, setIngredients] = useState(" ")
    const[foodPicture, setFoodPicture] = useState(" ")
    const[cateGory, setCategory] = useState(" ")

    console.log(user.user_type)
    const token = localStorage.getItem('jwt')
    const handleSubmit = (e) => {
        console.log(user.user_type)
        e.preventDefault();
        if (user.user_type === 'chef') {
            fetch('/products', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    food_name: foodName,
                    price: foodPrice,
                    ingredient: ingreDients,
                    picture: foodPicture,
                    category: cateGory
                })
            })
            .then(res => res.json())
            .then((food) => console.log(food))
            setFoodName("")
            setPrice("")
            setIngredients("")
            setFoodPicture("")
            setCategory("")
            navigate('/home')
        }
    }
    // console.log(foods)  

    const handleUpdateForm = (e) => {
        e.preventDefault();
        fetch("/products/:id", {
            method: "PATCH",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: foodName,
                price: foodPrice,
                ingredients: ingreDients,
                picture: foodPicture,
                category: cateGory
            })
        })
        .then(res => res.json())
    .then((food) => console.log(food))
}


    return (
    <div>
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Food Name" 
                    value={foodName}
                    onChange={e => setFoodName(e.target.value)} 
                />
                <input  
                    type="text" 
                    className="form-control" 
                    placeholder="Price" 
                    value={foodPrice}
                    onChange={e => setPrice(e.target.value)}
                />
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingredients" 
                    value={ingreDients}
                    onChange={e => setIngredients(e.target.value)}
                />
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Picture" 
                    value={foodPicture}
                    onChange={e => setFoodPicture(e.target.value)}
                />
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Category" 
                    value={cateGory}
                    onChange={e => setCategory(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Submit</button>
            <button onClick={handleUpdateForm} className="btn btn-primary">Update</button>

        </form>
        {/* <button onClick={handleUpdateForm} className="btn btn-primary">Update</button> */}

    </div>
    )
}

export default FoodForm
