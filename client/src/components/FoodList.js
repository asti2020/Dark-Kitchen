import React from 'react'
import { FoodCard } from './FoodCard'
import Search from "./Search";
import { useState } from "react";
import { Home } from './Home';
// import { useEffect } from "react";

const [search, setSearch] = useState("")

// useEffect(() => {
//     fetch ("http://localhost:3000/products")
//     .then((res) => res.json())
//     .then((foods) => {
//         console.log(foods, "fetching foods from the FoodList!");
//         setProducts(foods);
//     });
//     }, []);

const searchedFoods = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });



 

export const FoodList = ({foods, newFood, user}) => {
    return (
                <>{
                    foods.map
                    (food => {
                        return <FoodCard key={food.id} food={food} user={user}/>
                    })
                }
                <Search search={search} onSearch={setSearch} />
                <FoodList foods={searchedFoods} />
                </>

                
    )
}
