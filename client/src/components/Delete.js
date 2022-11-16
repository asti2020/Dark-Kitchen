import React from 'react'

export const Delete = () => {
    let token = localStorage.getItem('jwt')
    const handleDelete = (e) => {
        e.preventDefault();
            fetch("/products", {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
            }) 
            .then(res => res.json())
            .then((food) => console.log(food))
    }
  return (
    <>
        <button onClick={handleDelete} className="btn btn-primary">DELETE</button>
    </>
  )
}
