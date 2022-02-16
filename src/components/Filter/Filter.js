
import {Dropdown} from 'react-bootstrap';
import './Filter.css'

const Filter = (props) => {

            
    return (<div className="filter">
         <div className="filter-result">availabel products : {props.products.length}</div>
         
         <div className='btn-group mx-5'>
  <button onClick={props.latest} type="button" className="btn btn-dark">latest product</button>
  <button onClick={props.lowest} type="button" className="btn btn-dark">lowest price</button>
  <button onClick={props.highest} type="button" className="btn btn-dark">highest price</button>
         </div>
         
         <Dropdown>
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
    filter by size 
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item onClick={() => props.filterSizeHandler('')}>All</Dropdown.Item>
    <Dropdown.Item onClick={() => props.filterSizeHandler('XS')} >XS</Dropdown.Item>
    <Dropdown.Item onClick={() => props.filterSizeHandler('S')}>S</Dropdown.Item>
    <Dropdown.Item onClick={() => props.filterSizeHandler('M')}>M</Dropdown.Item>
    <Dropdown.Item onClick={() => props.filterSizeHandler('L')}>L</Dropdown.Item>
    <Dropdown.Item onClick={() => props.filterSizeHandler('XL')} >XL</Dropdown.Item>
    <Dropdown.Item onClick={() => props.filterSizeHandler('XXL')}>XXL</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </div>

     );
}
 
export default Filter;

