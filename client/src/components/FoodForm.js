import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

function FoodForm({ user }) {
    const navigate = useNavigate();
    const[foodName, setFoodName] = useState("")
    const[foodPrice, setPrice] = useState("")
    const[ingredients, setIngredients] = useState("")
    const[foodPicture, setFoodPicture] = useState("")
    const[category, setCategory] = useState("")

    //console.log(user.user_type)
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
                    ingredient: ingredients,
                    picture: foodPicture,
                    category: category
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
                ingredients: ingredients,
                picture: foodPicture,
                category: category
            })
        })
        .then(res => res.json())
    .then((food) => console.log(food))
}


    return (
    <>
        <form onSubmit={handleSubmit} >
            <div className='foodFormInputDiv'>
                <input
                    type="text"
                    className="foodInput"
                    placeholder="Food Name"
                    value={foodName}
                    onChange={e => setFoodName(e.target.value)}
                />
            </div>
            <div className='foodFormInputDiv'>
                <input
                    type="text"
                    className="foodInput"
                    placeholder="Price"
                    value={foodPrice}
                    onChange={e => setPrice(e.target.value)}
                />
            </div>
            <div className='foodFormInputDiv'>
                <input
                    type="text"
                    className="foodInput"
                    placeholder="Ingredients"
                    value={ingredients}
                    onChange={e => setIngredients(e.target.value)}
                />
            </div>
            <div className='foodFormInputDiv'>
                <input
                    type="text"
                    className="foodInput"
                    placeholder="Picture"
                    value={foodPicture}
                    onChange={e => setFoodPicture(e.target.value)}
                />
            </div>
            <div className='foodFormInputDiv'>
                <input
                    type="text"
                    className="foodInput"
                    placeholder="Category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
            </div>

            <button style={{marginRight: '10px'}}className="loginBtn">Submit</button>
            <button onClick={handleUpdateForm} className="loginBtn">Update</button>

        </form>
        {/* <button onClick={handleUpdateForm} className="btn btn-primary">Update</button> */}

    </>
    )
}

export default FoodForm
