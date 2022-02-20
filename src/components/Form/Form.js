import { useDispatch, useSelector } from "react-redux";
import './Form.css'

const Form = ({cartItems,createOrder,totalPrice,openOrderModal}) => {

const dispatch = useDispatch()

const name = useSelector(state => state.nameFormCart.name)
const email = useSelector(state => state.emailFormCart.email)
const address = useSelector(state => state.addressFormCart.address)


const handleSubmit = (e) => {
    e.preventDefault()

    const order ={
        name,
        address,
        email,
        cartItems,
        totalPrice
    }
    createOrder(order)

    }

    return ( 
        <div className='form'>
    <form onSubmit={handleSubmit}>
  <ul className='form-container'>
      <li>
          <label>Email</label>
          <input value={email} type="email" placeholder="email" required
           onChange={(e) =>dispatch({type: 'FORM-CART-EMAIL', payload: e.target.value})}/>
          </li>
          <li>
          <label>Name</label>
          <input value={name} type="text" placeholder="name" required
           onChange={(e) =>dispatch({type: 'FORM-CART-NAME', payload: e.target.value})}/>
          </li>
          <li>
          <label>Address</label>
          <input value={address} type="text" placeholder="address" required
           onChange={(e) =>dispatch({type: 'FORM-CART-ADDRESS', payload: e.target.value})}/>
          </li>
          <li>
              <button onClick={openOrderModal} className="form-button" type="submit">checkout</button>
          </li>
  </ul>
    </form>  
</div>
     );
}
 
export default Form;