import Filter from '../../components/Filter/Filter';
import Product from '../../components/Product/Product';

import './Home.css'

const Home = (props) => {
    return ( 
    <main>
         <Filter size={props.size}  products={props.products} 
         filterSizeHandler={props.filterSizeHandler}  lowest={props.lowest}
          highest={props.highest} latest={props.latest}/>
        <div className="content">
<div className="main-product">
    <ul className='products'>  
{props.products.map((item) => {
    return (
<li key={item._id}>
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