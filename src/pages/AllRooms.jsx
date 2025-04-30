import React from 'react'
import { roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const AllRooms = () => {
  const navigate = useNavigate()
  return (
    <div className='flex  flex-col-reverse lg:flex-row items-start justify-between pt-28 mf:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 '>
      <div>
        <div>
          <h1 className='font -playfair text-4xl md:text-[40px]'>Hotel  Rooms</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>The advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
        </div>

        {roomsDummyData.map((room) => (
          <div>
            <img 
              src={room.images[0]} 
              alt="hotel-img" 
              title='View Room Details' 
              className='max-h-65:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
              onClick={() => navigate(`/room/${room.id}`)}
              
            />
            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>
              <p className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
              < className='flex items-center'>
                <div>
                <StarRating/>
                </div>
                <div>
                              </div>

          </div>
        ))}
      </div>
      {/* Filters */}
      <div>

      </div>
      
    </div>
  )
}

export default AllRooms
