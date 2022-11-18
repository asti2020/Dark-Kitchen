import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import {useNavigate} from 'react-router-dom'

//product from product container
function EditFoodForm({updateProducts, user}) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        food_name:'',
        price:'',
        ingredient:'',
        picture:'',
        category:''
    })
    const {id} = useParams()
    useEffect(() => {
        fetch(`/products/${id}`)
        .then(res => res.json())
        .then(setFormData)
    },[ id ])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
const token = localStorage.getItem('jwt')
function onSubmit(e){
        e.preventDefault()
        //PATCH to `/productions/${id}`
        if (user.user_type === 'chef') {
        fetch(`/products/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(updateProducts)
    }
    else {
        navigate('/login')
    }
}
        return (
        <div className='App'>
        {/* {errors?errors.map(e => <div>{e}</div>):null} */}
        <Form onSubmit={onSubmit}>
            <label>Food Name </label>
            <input type='text' name='food_name' value={formData.food_name} onChange={handleChange} />
            
            <label> Price</label>
            <input type='number' name='price' value={formData.price} onChange={handleChange} />
        
            <label>Ingredients</label>
            <input type='text' name='ingredienst' value={formData.ingredient} onChange={handleChange} />
        
            <label>Image</label>
            <input type='text' name='picture' value={formData.picture} onChange={handleChange} />
        
            <label>Category</label>
            <input type='text' name='category' value={formData.category} onChange={handleChange} />
                
            <input type='submit' value='Update Production' />
        </Form>
        </div>
        )
  }
  export default EditFoodForm
