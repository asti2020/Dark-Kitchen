import React from 'react'

export const Delete = ({food, onDeleteProduct}) => {
    let token = localStorage.getItem('jwt')
    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`/products/${food.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token
                },
            }).then(res => res.text())
            .then(data => onDeleteProduct(data)) 
    }
    return (
        <>
            <button onClick={handleDelete} className="">DELETE</button>
        </>
    )
}
