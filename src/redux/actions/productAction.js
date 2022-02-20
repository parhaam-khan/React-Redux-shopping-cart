import axios from "../../axios-orders"

export const getProductAction = () => async (dispatch) => {
    try{
        dispatch({type: 'GET-PRODUCTS'})
        const {data} = await axios.get("/products.json")
    
        dispatch({type: 'GET-PRODUCT-SUCCESS' , payload: data})

    }catch (error){
        console.log(error);
    }
   
}

export const sizeFilterAction = (sizeItem) => async (dispatch) => {
const response = await axios.get("/products.json")
const products = response.data

const filterSize = products.filter((item) => item.availableSizes.indexOf(sizeItem) >= 0);
dispatch({type: 'SIZE-FILTER', payload: filterSize})

if(sizeItem === ""){
    dispatch({type: 'SIZE-ALL', payload: products})
}
}

export const latestPriceAction = () => (dispatch,getState) => {
const products = getState().getProducts.products

const latestPrice = [...products].sort((a,b) => a._id < b._id ? 1:-1)
dispatch({type: 'LATEST-PRODUCT', payload: latestPrice})
}

export const lowestPriceAction = () => (dispatch,getState) => {
    const products = getState().getProducts.products

    const lowestPrice = [...products].sort((a,b) => a.price > b.price ? 1:-1)
    dispatch({type: 'LOWEST-PRICE', payload: lowestPrice})    
    
}

export const highestPriceAction = () => (dispatch,getState) => {
    const products = getState().getProducts.products

    const highestPrice = [...products].sort((a,b) => a.price < b.price ? 1:-1)
    dispatch({type: 'HIGHEST-PRICE', payload: highestPrice})
    
}
