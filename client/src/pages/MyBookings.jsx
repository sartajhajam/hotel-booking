import React from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
  const [bookings, setBookings] = React.useState(userBookingsDummyData);

  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title 
        title='My Bookings' 
        subTitle='Easily manage your past, current and upcoming hotel reservations in one place. Plan your trips seamlessly with just few clicks' 
        align='left'
      />

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
          <div className='w-1/3'>Hotels</div>
          <div className='w-1/3'>Date & Timings</div>
          <div className='w-1/3'>Payment</div>
        </div>

        {bookings.map((booking) => (
          <div 
            key={booking._id} 
            className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'
          >
            {/* Hotel Details */}
            <div className='flex flex-col md:flex-row gap-4'> 
              <img 
                src={booking.room.images[0]} 
                alt="Hotel-img" 
                className='w-full md:w-44 h-44 rounded-lg shadow object-cover' 
              /> 
              <div className='flex flex-col gap-2'>
                <p className='font-playfair text-2xl'>
                  {booking.room.hotel.name}
                  <span className='font-inter text-sm'> ({booking.room.roomType})</span>
                </p>
                <div className='flex items-center gap-1 text-gray-500 text-sm'>
                  <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4'/>
                  <span>{booking.hotel.address}</span>
                </div>

                <div className='flex items-center gap-1 text-gray-500 text-sm'>
                  <img src={assets.guestsIcon} alt="guests-icon" className='w-4 h-4'/>
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className='text-base font-medium'>Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Date & Timings */}
            <div className='flex flex-col gap-2 mt-4 md:mt-0'>
              <div className='flex items-center gap-2'>
                <img src={assets.calenderIcon} alt="calendar-icon" className='w-4 h-4' />
                <div>
                  <p className='text-sm text-gray-500'>Check In</p>
                  <p>{new Date(booking.checkInDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <img src={assets.calenderIcon} alt="calendar-icon" className='w-4 h-4' />
                <div>
                  <p className='text-sm text-gray-500'>Check Out</p>
                  <p>{new Date(booking.checkOutDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Payment Status */}
            <div className='flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0'>
              <p className={`text-sm ${booking.isPaid ? 'text-green-500' : 'text-orange-500'}`}>
                {booking.isPaid ? 'Paid' : 'Unpaid'}
              </p>
              {!booking.isPaid && (
                <button className='px-3 py-1 text-xs font-medium text-primary border border-primary rounded-full hover:bg-primary/5 transition-all cursor-pointer'>
                  Pay Now
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
