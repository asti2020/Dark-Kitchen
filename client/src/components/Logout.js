import React from 'react'

export const Logout = ({setUser}) => {
    const handleClick = () => {
        localStorage.removeItem('jwt')
        setUser(null)
    }
    return (
        <button onClick={handleClick}>Logout</button>
    )
}