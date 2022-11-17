import React from 'react'
import { useNavigate } from "react-router-dom";
export const Logout = ({setUser}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('jwt')
        navigate('/')
    }
    return (
        <>
        <button onClick={handleClick}>Logout</button>
        </>
    )
}