import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import Filter from '../../components/Filter/Filter';
import ProductModal from '../../components/productModal/productModal';
import Product from '../../components/Product/Product';

import './Home.css'

const Home = (props) => {
const dispatch = useDispatch()
const modalProduct = useSelector(state => state.modalProducts.modalProduct)
const {loading} = useSelector(state => state.getProducts)

    //open&close modal
const openModal = (product) => {
    dispatch({type: 'MODAL-PRODUCT', payload: product})
    }

    const closeModal = () => {
        dispatch({type: 'MODAL-PRODUCT', payload: null})
    }

    return ( 
        
    <main>
        {props.products.length !== 0 ?
        <>
        <Filter products={props.products} filterSizeHandler={props.filterSizeHandler}
         lowest={props.lowest}
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

{modalProduct && <ProductModal addtocartHandler={props.addtocartHandler}
modalProduct={modalProduct} closeModal={closeModal}/>}

</div>
<div className="sidebar">
<Cart removeHandler={props.removeHandler} cartItems={props.cartItems}
showFormHandler={props.showFormHandler}  createOrder={props.createOrder}/>
</div>
       </div> </>: <h4 className='text-center mt-5'>loading...</h4>}
         
    </main> );
}
 
export default Home;