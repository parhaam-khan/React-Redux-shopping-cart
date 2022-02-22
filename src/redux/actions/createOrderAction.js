import axios from "../../axios-orders"

export const orderAction = (order) => async (dispatch) => {

     dispatch({type: 'PRE-POST'})
     
     await axios.post('/orders.json', order)

    dispatch({type:'POST-ORDER', payload: order})

     localStorage.clear('cartItems')
    
}