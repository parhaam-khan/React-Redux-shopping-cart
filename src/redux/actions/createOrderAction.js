import axios from "../../axios-orders"

export const orderAction = (order) => async (dispatch) => {

     await axios.post('/orders.json', order)

    dispatch({type:'POST-ORDER', payload: order})

     localStorage.clear('cartItems')
    
}