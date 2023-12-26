import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct'
import Filters from './Filters'

export const Home = () => {
  const {
    state: { products },
  } = CartState()

  return (
    <div className="home">
    
        <Filters />
     

      <div className="pContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default Home
