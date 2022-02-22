import axios from "../../axios-orders"

export const cartAddAction = (id) => async (dispatch,getState) => {
    
    const cartItems = getState().cart.cartItems

    dispatch({type: 'PRE-ADD'})

    const {data} = await axios.get(`/products/${id}.json`)

    dispatch({type:'CART-ADD', payload:data})

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const removeCartAction = (product) => (dispatch,getState) => {
const cartItems = getState().cart.cartItems

const removeProduct =  cartItems.filter((item) => item._id !== product._id)

dispatch({type: 'CART-REMOVE', payload : removeProduct})

localStorage.setItem('cartItems', JSON.stringify(removeProduct))

}



