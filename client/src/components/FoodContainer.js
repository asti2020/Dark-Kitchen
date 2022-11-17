import React, {useEffect, useState} from 'react';
 // eslint-disable-next-line 
import NavList from "./NavList";
import FoodList from "./FoodList";
import Search from './Search';
import { FoodCard } from './FoodCard';

function FoodContainer() {
const [products, setProducts] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
fetch ("http://localhost:3000/products")
.then((res) => res.json())
.then((products) => {
    console.log(products, "fetching products from the HomePage!");
    setProducts(products);
});
}, []);

const searchedProducts = products.filter((product) => {
  return product.name.toLowerCase().includes(search.toLowerCase());
});

  return (
    <main>
      <Search search={search} onSearch={setSearch}/>
      <FoodList products={searchedProducts} />
    </main>
  )
}

export default FoodContainer

