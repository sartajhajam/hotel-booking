import React from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

  const[bookings, setBookings] = React.useState(userBookingsDummyData);
  return (
    <div>
      <Title title='My Bookings' subTitle='Easily manage your past,current and upcoming hotel reservations in one place.Plan your trips seamlessly with just few clicks ' align='left'/>

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
          <div className='w-1/3'>Hotels</div>
          <div className='w-1/3'>Date & Timings</div>
          <div className='w-1/3'>Payment</div>
        </div>

        {bookings.map((booking, index) => (
          <div key={booking._id}className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr]w-full border-b border-gray-300 py-6 first:border-t' >
            {/* Hotel Details */}
            <div> 
              <img src={booking.room.hotel.images[0]} alt="Hotel-img" className='min-md:w-44 rounded-lg shadow object-cover' /> 
              <div>
                <p className='font-playfair text-2xl' >{booking.room.hotel.name}
                 <span className='font-inter text-sm'>({booking.room.roomType})</span>
                 </p>
                 <div className='flex items-center gap-1 text-gray-500  text-sm'>
                  <img src={assets.locationIcon} alt="location-icon"/>
                  <span>{booking.hotel.address}</span>
                  </div>

                          </div>
            </div>
            {/* Date & Timings */}
            <div> </div>
            {/* Payment Status */}
            <div> </div>
            }
      </div>
      
    </div>
  )
}

export default MyBookings
