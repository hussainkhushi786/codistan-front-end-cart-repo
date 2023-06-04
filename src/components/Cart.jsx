import React,{useState,useContext} from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import CustomOffcanvas from './CustomOffcanvas';
import { CartContext } from '../contextApi/CartContext';
const Cart = () => {
   const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
   const { cart ,totalCount,totalPrice} = useContext(CartContext);
   console.log(cart);

  const handleCartClick = () => {
    setOffcanvasOpen(true);
  };

  const handleCloseOffcanvas = () => {
    setOffcanvasOpen(false);
  };
  return (
    <div className="d-flex align-items-center">
      <div className="position-relative me-2">
        <FaShoppingCart style={{ fontSize: '25px',cursor: 'pointer' }} onClick={handleCartClick}/>
        <div className="cart position-absolute top-0 end-0 p-1 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">{totalCount}</div>
      </div>
      <CustomOffcanvas isOpen={isOffcanvasOpen} onClose={handleCloseOffcanvas} cart={cart} totalCount={totalCount} totalPrice={totalPrice}/>
    </div>
  )
}

export default Cart