import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductAction, highestPriceAction, latestPriceAction, lowestPriceAction, sizeFilterAction } from "./redux/actions/productAction";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";

import { cartAddAction, removeCartAction } from "./redux/actions/cartAction";
import { orderAction } from "./redux/actions/createOrderAction";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css'

const App = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.getProducts)
    const{products} = allProducts


    //get data from firebase-------------------------------------------

        useEffect(() => {
        dispatch(getProductAction())
        },[dispatch])


//filter size handler--------------------------------------------
const filterSizeHandler = (sizeItem) => {
    dispatch(sizeFilterAction(sizeItem))
     }


     //sort handlers-------------------------------------------
const lowestSortHandler = () => {
     dispatch(lowestPriceAction())
    
}
const highestSortHandler = () => {
    dispatch(highestPriceAction())
   
}
const latestSortHandler = () => {
    dispatch(latestPriceAction())
}

// add to cart handler
const addtocartHandler = (id) => {
    dispatch(cartAddAction(id))
}


//remove from cart handler

 const removeHandler = (product) => {
     dispatch(removeCartAction(product))

 }

//show form handler
const showFormHandler = () => {
    dispatch({type:'SHOW-FORM-CART', payload: true})
}

const createOrder = (order) => {
dispatch(orderAction(order))
dispatch({type: 'CLEAR-CART'})
dispatch({type:'SHOW-FORM-CART' , payload: false})
dispatch({type:'FORM-CART-EMAIL', payload: ""})
dispatch({type:'FORM-CART-NAME', payload: ""})
dispatch({type:'FORM-CART-ADDRESS', payload: ""})
}

    return (
        <div className="app">
        <Header/>
        <Home products={products} 
         lowest={lowestSortHandler} highest={highestSortHandler} latest={latestSortHandler}
         addtocartHandler={addtocartHandler} removeHandler={removeHandler}
         showFormHandler={showFormHandler} createOrder={createOrder} filterSizeHandler={filterSizeHandler} />
    </div>
        
 );
}
 
export default App;