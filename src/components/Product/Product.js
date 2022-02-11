import './Product.css'

const Product = ({product,addtocartHandler}) => {
    return ( 
        <div className="product">
<a>
  <img src={product.image} alt={product.title}></img>  
  <p>{product.name}</p>
</a>
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