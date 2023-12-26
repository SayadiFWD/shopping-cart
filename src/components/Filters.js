import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'


const Filters = () => {
  const [rate,setRate] = useState(5)
  return (
    <div className="filters">
      <span className="title">Filter products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-type1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={`inline3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Farst delivery only"
          name="group1"
          type="checkbox"
          id={`inline4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating  rating={rate} onClick={(i)=> setRate(i)} style={{cursor: "pointer"}} />
      </span>
      <span>
        <Button variant='light'>Clear filter</Button>
      </span>
    </div>
  )
}

export default Filters
