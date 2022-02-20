import { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import OrderModal from '../OrderModal/OrderModal';
import './Cart.css'

const Cart = ({ removeHandler,showFormHandler,createOrder}) => {
    const dispatch = useDispatch()
   const[orderModal,setOrderModal] = useState(false)
const cartItems = useSelector(state => state.cart.cartItems)
const showForm = useSelector(state => state.showFormCart.showForm)
 const orderValue = useSelector(state => state.order.orderValue)

const totalPrice = cartItems.reduce((a,c) => a + (c.price * c.quantity), 0 )

const openOrderModal = () => {
    setOrderModal(true)
}

const closeOrderModal = () => {
    setOrderModal(false)
 dispatch({type: 'POST-ORDER', payload: []})
}


    return ( 
        <div>
            <div>
            {cartItems.length === 0 ? <div className="cart cart-header">cart is empty</div>:
            <div className="cart cart-header">there is {cartItems.length} item</div>}
            </div>

            {(orderModal  && orderValue.length !== 0) ?<OrderModal openOrderModal={openOrderModal} closeOrderModal={closeOrderModal}/>: null}

            <div className='cart'>
        <ul className='cart-items'>
            {cartItems.map((item) => {
                return(
                    <li key={item._id}>
                    <div> <img src={item.image} alt={item.name}/></div>
                    <div> 
                        <div>{item.name}</div>
                       <div className='remove'>
                           <p className='cart-price'>{item.price}$ </p>
                           <p className='cart-price'>qty: {item.quantity}</p>
                           <button onClick={() => removeHandler(item)}
                            className='remove-button' type='button'>remove</button>
                           </div> 
                    </div>
                   </li>
                )
           
            })}
        </ul>
</div>
{cartItems.length !== 0 && (
    <div>
    <div className='cart'>
    <div className='total'>
    <h3>total price: {totalPrice} $</h3>
    <button onClick={showFormHandler} className='button-proceed'>proceed</button>
    </div>
    </div>
    {showForm && <Form totalPrice={totalPrice} cartItems={cartItems}
     createOrder={createOrder} openOrderModal={openOrderModal} /> }
    </div>
)}
        </div>
     );
}
 
export default Cart;