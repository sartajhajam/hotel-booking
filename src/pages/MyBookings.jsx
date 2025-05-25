import React from 'react'
import Title from '../components/Title'

const MyBookings = () => {
  return (
    <div>
      <Title title='My Bookings' subTitle='Easily manage your past,current and upcoming hotel reservations in one place.Plan your trips seamlessly with just few clicks ' align='left'/>

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
          <div className='w-1/3'>Hotels</div>
          <div className='w-1/3'>Date & Timings</div>
          <div className='w-1/3'>Payment</div>
        </div>
      </div>
      
    </div>
  )
}

export default MyBookings
