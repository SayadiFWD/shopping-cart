import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";


const Rating = ({ rating, onClick, style }) => {
  
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={()=>onClick(i)} style={style}>
          {rating > i ? (
           <RiStarSFill />
          ) : (
            <RiStarSLine />
          )}
        </span>
      ))}

  
    </div>
  )
}

export default Rating
