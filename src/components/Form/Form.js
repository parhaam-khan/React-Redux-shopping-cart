import { useState } from "react";
import './Form.css'

const Form = ({cartItems,createOrder}) => {
const[name,setName] = useState("")
const[address,setAddress] = useState("")
const[email,setEmail] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()

    const order ={
        name,
        address,
        email,
        cartItems
    }
    createOrder(order)
    }

    return ( 
        <div className='form'>
    <form onSubmit={handleSubmit}>
  <ul className='form-container'>
      <li>
          <label>Email</label>
          <input value={email} type="email" placeholder="email" required onChange={(e) =>setEmail(e.target.value)}/>
          </li>
          <li>
          <label>Name</label>
          <input value={name} type="text" placeholder="name" required onChange={(e) =>setName(e.target.value)}/>
          </li>
          <li>
          <label>Address</label>
          <input value={address} type="text" placeholder="address" required onChange={(e) =>setAddress(e.target.value)}/>
          </li>
          <li>
              <button className="form-button" type="submit">checkout</button>
          </li>
  </ul>
    </form>
</div>
     );
}
 
export default Form;