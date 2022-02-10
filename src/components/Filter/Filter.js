
import './Filter.css'

const Filter = (props) => {
    return (<div className="filter">
         <div className="filter-result">availabel products : {props.products.length}</div>
         
         <div className='btn-group mx-5'>
  <button onClick={props.latest} type="button" className="btn btn-dark">latest product</button>
  <button onClick={props.lowest} type="button" className="btn btn-dark">lowest price</button>
  <button onClick={props.highest} type="button" className="btn btn-dark">highest price</button>
         </div>
         
         <div className="filter-size">
             Filter size <select value={props.size} onChange={props.filterSizeHandler}>
                 <option value="">All</option>
                 <option value="XS">XS</option>
                 <option value="S">S</option>
                 <option value="M">M</option>
                 <option value="L">L</option>
                 <option value="XL">XL</option>
                 <option value="XXL">XXL</option>
             </select>
             </div>
    </div>
     );
}
 
export default Filter;