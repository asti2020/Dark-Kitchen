import React from 'react'
import Search from "./Search";
import { FoodCard } from './FoodCard'
// import { Home } from './Home';
import { useState, useEffect } from "react";

export const FoodList = ({foods, newFood, user}) => {
    const [search, setSearch] = useState("")
    const [product, setProduct] = useState([])

useEffect(() => {
    fetch ("http://localhost:3000/products")
    .then((res) => res.json())
    .then((product) => {
        // console.log(product, "fetching foods from the FoodList!");
        setProduct(product);
    });
    }, []);

const searchedFoods = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

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
