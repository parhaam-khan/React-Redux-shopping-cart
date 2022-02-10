import { useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import products from "./products/products";
import Home from "./pages/Home/Home";

import './App.css'

const App = () => {
    const[product,setProduct] = useState(products)
    const[size,setSize] = useState("")

//size handler-------------------------------------------------
    const filterSizeHandler = (e) => {
if(e.target.value !== ""){
    setSize(e.target.value)
    const filterSize = products.filter((item) => {
        return(
            item.availableSizes.indexOf(e.target.value) >= 0
        )
        })
        setProduct(filterSize)
}else{
    setSize(e.target.value)
    setProduct(products)
}
 }

     //sort handlers-------------------------------------------
const lowestSortHandler = () => {
    const lowestPrice = [...product].sort((a,b) => a.price > b.price ? 1:-1)
    setProduct(lowestPrice)
}
const highestSortHandler = () => {
    const highestPrice = [...product].sort((a,b) => a.price < b.price ? 1:-1)
    setProduct(highestPrice)
}
const latestSortHandler = () => {
    const latestPrice = [...product].sort((a,b) => a._id < b._id ? 1:-1)
    setProduct(latestPrice)
}

    return (
        <div className="app">
        <Header/>
        <Home products={product} size={size}  filterSizeHandler={filterSizeHandler}
         lowest={lowestSortHandler} highest={highestSortHandler} latest={latestSortHandler} />
        <Footer/>
    </div>
        
 );
}
 
export default App;