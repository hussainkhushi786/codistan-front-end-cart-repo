import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../contextApi/CartContext';

const CustomCard = ({ id, title, image, price, description }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="mt-3">
      <Card.Img variant="top" src={image} alt="Card image cap" style={{ maxHeight: '200px' }} />
      <Card.Body >
        <div className="d-flex justify-content-between align-items-center ">
          <Card.Title>{title}</Card.Title>
          <Card.Title>${price}</Card.Title>
        </div>
        <Card.Text>{description}</Card.Text>
        <Button variant="light" className="w-100" onClick={() => addToCart({ Id:id, Name:title, Image:image, Price:price })}>
          Add To Cart <FaShoppingCart className="ms-2" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
