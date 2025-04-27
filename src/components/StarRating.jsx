import React from 'react'
import { assets } from '../assets/assets' // Assuming you forgot to import assets

const StarRating = ({ rating }) => {
  return (
    <>
      {Array(5).fill('').map((_, index) => (
        <img 
          key={index} // Always add a key inside map
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined} 
          alt="star-icon" 
          className="w-4.5 h-4.5" 
        />
      ))}
    </>
  )
}

export default StarRating
