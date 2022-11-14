import React from 'react'
import {useState} from 'react'

function FoodForm() {
const[foodName, setFoodName] = useState(" ")
const[foodPrice, setPrice] = useState(" ")
const[ingreDients, setIngredients] = useState(" ")
const[foodPicture, setFoodPicture] = useState(" ")
const[cateGory, setCategory] = useState(" ")

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(foodName, foodPrice, ingreDients, foodPicture, cateGory)
    fetch("/products", {
        method: "POST",
        headers: {
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

    setFoodName("")
    setPrice("")
    setIngredients("")
    setFoodPicture("")
    setCategory("")


    fetch("/products/:id",{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: foodName,
            price: foodPrice,
            ingredients: ingreDients,
            picture: foodPicture,
            category: cateGory
        })
    }
    )
    console.log(foodName, foodPrice, ingreDients, foodPicture, cateGory)
 

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

        </form>
    </div>
    )
}

export default FoodForm
