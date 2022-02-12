import ReactModal from "react-modal";
import './Modal.css'

const Modal = ({closeModal,modalProduct,addtocartHandler}) => {

    const addToCartModal = (product) => {
        addtocartHandler(product)
        closeModal()
    }
    return ( 
        <ReactModal isOpen={true}>
    <button className="close-modal" onClick={closeModal}><h5>x</h5></button>
 <div className="product-details">
<img src={modalProduct.image} alt={modalProduct.name}/>
<div className="product-detail-desc">
<p><h3>{modalProduct.name}</h3></p>
<p>{modalProduct.desc}</p>
<p>available Sizes:
     {modalProduct.availableSizes.map((x) => <button className="size-button">{x}</button>)}
     </p>
     <div className="modalProduct-price">
         <div>{modalProduct.price}</div>
         <button className="modal-add" onClick={() =>addToCartModal(modalProduct)}>add to cart</button>
         </div>
</div>
 </div>
        </ReactModal>
    );
}
 
export default Modal;