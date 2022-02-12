import Form from '../Form/Form';
import './Cart.css'

const Cart = ({cartItems, removeHandler,showFormHandler,showForm,createOrder}) => {

    return ( 
        <div>
            <div>
            {cartItems.length === 0 ? <div className="cart cart-header">cart is empty</div>:
            <div className="cart cart-header">there is {cartItems.length} item</div>}
            </div>
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
    <h3>total price: {cartItems.reduce((a,c) => a + (c.price * c.quantity), 0 )}$</h3>
    <button onClick={showFormHandler} className='button-proceed'>proceed</button>
    </div>
    </div>
    {showForm && <Form cartItems={cartItems} createOrder={createOrder}/> }
    </div>
)}
        </div>
     );
}
 
export default Cart;