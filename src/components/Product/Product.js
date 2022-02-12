import './Product.css'

const Product = ({product,addtocartHandler,openModal}) => {

    return ( 
        <div className="product">
<div onClick={() => openModal(product)}>
  <img src={product.image} alt={product.title}></img>  
  <p>{product.name}</p>
</div>
<div className='product-price'>
    <div>
        {product.price}$
    </div>
    <button onClick={() => addtocartHandler(product)}>add to cart</button>
</div>
        </div>
     );
}
 
export default Product;