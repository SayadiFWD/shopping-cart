import React from 'react'
import { Card,Button } from 'react-bootstrap'
import Rating from './Rating'

const SingleProduct = ({ product }) => {
  return (
    <div className="products">
      <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle style={{padding: 10}}>
          <span>{product.price}</span>
          {product.fastDelivery ? (<div>Fast delivery</div>):(<div>4 days delivery</div>)}
    
        </Card.Subtitle>
        <Button variant='danger'>Add to cart</Button>
        <Button>Remove</Button>
      </Card.Body>

      </Card>
    </div>
  )
}

export default SingleProduct
