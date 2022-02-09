import Product from '../../components/Product/Product';
import products from '../../products/products';
import './Home.css'

const Home = () => {
    return ( 
    <main>
        <div className="content">
<div className="main-product">
    <ul className='products'>  
{products.map((item) => {
    return (
<li key={products._id}>
<Product product={item}/>
</li>
    )
})}
</ul>
</div>
<div className="sidebar">
sidebar
</div>
        </div>
    </main> );
}
 
export default Home;