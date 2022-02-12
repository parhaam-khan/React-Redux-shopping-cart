import { useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import products from "./products/products";
import Home from "./pages/Home/Home";

import './App.css'

const App = () => {
    const[product,setProduct] = useState(products)
    const[cartItems,setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): [])
    const[size,setSize] = useState("")
    const[showForm,setShowForm] = useState(false)

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

// add to cart handler
const addtocartHandler = (product) => {
   const existProduct = cartItems.find((item) => item._id === product._id )
   if(existProduct){
        
    const existCartItem = cartItems.map((item) => 
    item._id === product._id ? {...existProduct, quantity: existProduct.quantity + 1 } : item)
       setCartItems(existCartItem)
       localStorage.setItem("cartItems", JSON.stringify( existCartItem ))

   }else{
       const newCartitem = [...cartItems, {...product, quantity: 1}]
    setCartItems(newCartitem)
    localStorage.setItem("cartItems", JSON.stringify( newCartitem ))
   }
}

//remove from cart handler
const removeHandler = (product) => {
const removeProduct = cartItems.filter((item) => item._id !== product._id)
setCartItems(removeProduct)
localStorage.setItem("cartItems", JSON.stringify(removeProduct))

}

//show form handler
const showFormHandler = () => {
    setShowForm(true)
}

const createOrder = (order) => {
alert(`need to save ${order.name}`)
}
    return (
        <div className="app">
        <Header/>
        <Home products={product} size={size}  filterSizeHandler={filterSizeHandler}
         lowest={lowestSortHandler} highest={highestSortHandler} latest={latestSortHandler}
         addtocartHandler={addtocartHandler} removeHandler={removeHandler} cartItems={cartItems}
         showFormHandler={showFormHandler} showForm={showForm} createOrder={createOrder} />
        <Footer/>
    </div>
        
 );
}
 
export default App;