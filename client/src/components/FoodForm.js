import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Updatebutton } from './Updatebutton';

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
            fetch('./products', {
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

    const handleUpdateForm = (e) => {
        console.log("the edit is comming")
        e.preventDefault();
        if (user.user_type === 'chef') {

            fetch('/products/:id', {
                method: "PATCH",
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

        } else {
            return (
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-4">Welcome, {user.user_type}!</h1>
                        <p className="lead">

                </p>
                    </div>
                </div>
            );
    }}
    return (
    <div>
        <form className='form' onSubmit={handleSubmit} >
            <div className="form-group">
                <label>Food Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Food Name" 
                    value={foodName}
                    onChange={e => setFoodName(e.target.value)} 
                />
                <label>Price</label>
                <input  
                    type="text" 
                    className="form-control" 
                    placeholder="Price" 
                    value={foodPrice}
                    onChange={e => setPrice(e.target.value)}
                />
                <label>Ingredients</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingredients" 
                    value={ingreDients}
                    onChange={e => setIngredients(e.target.value)}
                />
                <label>Picture</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Picture" 
                    value={foodPicture}
                    onChange={e => setFoodPicture(e.target.value)}
                />
                <label>Category</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Category" 
                    value={cateGory}
                    onChange={e => setCategory(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>

        <Updatebutton onClick={handleUpdateForm} user={user} />
    </div>
    )
}

export default FoodForm
