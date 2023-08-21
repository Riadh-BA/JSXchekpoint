import React from 'react'
import Product from './Product'
import Card from 'react-bootstrap/Card';

const Url = () => {
  return (
    <div>
        <Card.Img variant="top" src={Product.url} />
    </div>
  )
}

export default Url