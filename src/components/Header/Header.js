const Header = () => {
    return ( 
       <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container-fluid">   
<a className="navbar-brand">shopping cart</a>
           <div className="collapse navbar-collapse">
               <ul className="navbar-nav">
                   <li className="nav-item"><a className="nav-link active">Home</a></li>
                   <li className="nav-item ms-5"><a><i className="fa fa-shopping-cart fa-2x"></i></a></li>
               </ul>
           </div>
           </div>
       </nav>
     );
}
 
export default Header;