import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import './OrderModal.css'

const OrderModal = ({openOrderModal,closeOrderModal}) => {
    const orderValue = useSelector(state => state.order.orderValue)

    const customStyles = {
        content: {
            padding: '0 200px 20px 200px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
    }

    return ( 
        <ReactModal isOpen={openOrderModal} style={customStyles}>
           <button className="close-modal" onClick={closeOrderModal}><h5>x</h5></button>
           <div className=" orderModal">
           <h3 className="text-success mb-5">your order has been placed</h3> 
                   <div className="orderDetail">
                       <h4>name:</h4> <h4>{orderValue.name}</h4>
                       </div> 
                   <div className="orderDetail">
                       <h4>email:</h4> <h4>{orderValue.email}</h4>
                       </div>
                    <div className="orderDetail">
                        <h4>address:</h4> <h4>{orderValue.address}</h4>
                        </div>
                        <div>
                            <h4>total price:</h4><h4> {orderValue.totalPrice}$</h4>
                            </div> 
                    <h4>items :</h4>
                    {orderValue.cartItems.map((item) =>
           
               <div key={item._id}><h6>{item.name}  qty: {item.quantity}</h6></div> )}
                
                   </div>
        </ReactModal>
     );
}
 
export default OrderModal;