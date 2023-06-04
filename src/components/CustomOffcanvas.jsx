import React, { useState,useContext } from 'react';
import { Button, Offcanvas,Table } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { CartContext } from '../contextApi/CartContext';

 const CustomOffcanvas = ({ isOpen, onClose}) => {
  const {addToCart,removeFromCart,totalCount,totalPrice,cart} = useContext(CartContext);
   console.log(cart)
  return (
    <>
      <Offcanvas show={isOpen} onHide={onClose} placement="end" scroll={false} backdrop={false} target="#offcanvasRight">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <table class="table table-success table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {cart.map((item) => (
             <tr key={item.Id}>
             <td><img src={item.Image} alt={item.Id} style={{width:'40px'}} /></td>
             <td>{item.Price}</td>
             <td className='d-flex'>
              <Button className='btn' onClick={()=>addToCart({ Id:item.Id, Name:item.Name,Image:item.Image, Price:item.Price})}><FaPlus/></Button>
              <input type="number" value={item?.count} placeholder="e.g 2" name="cart" className="form-control" readOnly="true" min={0} style={{width:'100px'}}/>
              <Button className='btn' onClick={() =>removeFromCart({Id:item.Id})}><FaMinus/></Button></td>
            </tr>
             ))}
            </tbody>
          </table>
          <strong className='me-5'>Total Item:   {totalCount}</strong>
          <strong>Total price: ${totalPrice.toFixed(2)}</strong>
          <button className='btn btn-dark mt-3'>Order Now</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomOffcanvas