// Import necessary dependencies
import React from 'react'
import { roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'
import assets from '../assets/assets'

const AllRooms = () => {
  // Initialize navigation hook
  const navigate = useNavigate()

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 mf:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Main content section */}
      <div>
        {/* Header section */}
        <div>
          <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
            The advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {/* Room cards section */}
        {roomsDummyData.map((room) => (
          <div key={room.id} className='flex flex-col md:flex-row gap-4 my-8'>
            {/* Room image */}
            <img 
              src={room.images[0]} 
              alt="hotel-img" 
              title='View Room Details' 
              className='md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
              onClick={() => {
                navigate(`/room/${room.id}`);
                window.scrollTo(0, 0);
              }}
            />
            
            {/* Room details */}
            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>
              <p 
                onClick={() => {
                  navigate(`/room/${room.id}`);
                  window.scrollTo(0, 0);
                }}
                className='text-gray-800 text-3xl font-playfair cursor-pointer'
              >
                {room.hotel.name}
              </p>
              
              {/* Rating section */}
              <div className='flex items-center'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
              </div>
              
              {/* Location section */}
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                <img src={assets.locationIcon} alt="location" />
                <span>{room.hotel.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters section */}
      <div>
        {/* Filter content will go here */}
      </div>
    </div>
  )
}

export default AllRooms
