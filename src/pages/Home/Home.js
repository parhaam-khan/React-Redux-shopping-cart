import { useState } from 'react';
import Cart from '../../components/Cart/Cart';
import Filter from '../../components/Filter/Filter';
import Modal from '../../components/Modal/Modal';
import Product from '../../components/Product/Product';

import './Home.css'

const Home = (props) => {
    const[modalProduct,setModalProduct] = useState(null)

    //open&close modal
const openModal = (product) => {
    setModalProduct(product)
    }

    const closeModal = () => {
setModalProduct(null)
    }

    return ( 
        
    <main>
        {props.products.length !== 0 ?
        <>
        <Filter products={props.products} 
        filterSizeHandler={props.filterSizeHandler}  lowest={props.lowest}
         highest={props.highest} latest={props.latest}/>
       <div className="content">
<div className="main-product">
   <ul className='products'>  
{props.products.map((item) => {
   return (    
<li key={item._id}> 
<Product openModal={openModal} product={item} addtocartHandler={props.addtocartHandler}/>
</li>)
})}
</ul>

{modalProduct && <Modal addtocartHandler={props.addtocartHandler}
modalProduct={modalProduct} closeModal={closeModal}/>}

</div>
<div className="sidebar">
<Cart removeHandler={props.removeHandler} cartItems={props.cartItems}
showFormHandler={props.showFormHandler} showForm={props.showForm} createOrder={props.createOrder}/>
</div>
       </div> </>: <h4 className='text-center mt-5'>loading...</h4>}
         
    </main> );
}
 
export default Home;