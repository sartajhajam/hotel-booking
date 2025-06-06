import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomsDummyData, roomCommonData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
  const {id} = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundRoom = roomsDummyData.find(room => room._id === id);
    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!room) {
    return <div className="flex items-center justify-center min-h-screen">Room not found</div>;
  }

  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Details */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-plafair'>{room.hotel.name} <span className='font-inter text-sm'> {room.roomType}</span></h1>
        <p className='text-xs font-inter py-1 px-3 text-white bg-orange-500 rounded-full'>20 % OFF</p>
      </div>

      {/* Room Rating */} 
      <div className='flex items-center gap-1 mt-2'>
        <StarRating/>
        <p className='ml-2'> 200 + reviews </p>
      </div>

      {/* Room Address */}
      <div>
        <img src={assets.locationIcon} alt="Location Icon" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room Images */}
      <div className='flex flex-col lg:flex-row gap-4 mt-6'>
        <div className='lg:w-2/3 w-full'>
          {mainImage && <img src={mainImage} alt="Room" className='w-full h-[400px] rounded-xl shadow-lg object-cover' />}
        </div>
        <div className='grid grid-cols-2 gap-2 lg:w-1/3 w-full'>
          {room.images && room.images.length > 1 && room.images.map((image, index) => (
            <img 
              onClick={() => setMainImage(image)}
              key={index} 
              src={image} 
              className={`w-full h-[190px] rounded-xl shadow-md cursor-pointer object-cover ${mainImage === image ? 'ring-2 ring-orange-500' : ''}`} 
              alt={`Room view ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Room Highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities && room.amenities.length > 0 && room.amenities.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Room Price */}
        <p className='text-2xl font-medium'>${room.pricePerNight || 0}/night</p>
      </div>

      {/* Check In Checkout Form */}
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] rounded-xl p-6 mx-auto mt-16 max-w-6xl'>

        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
        <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
          <div className='flex flex-col '>
            <label htmlFor='checkInDate' className='font-medium '>Check-In </label>
            <input type="date" id='checkInDate'placeholder='Check-In'className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none required'/>
          </div>

          <div className='flex flex-col '>
            <label htmlFor='checkOutDate' className='font-medium '>Check-Out </label>
            <input type="date" id='checkOutDate'placeholder='Check-Out'className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none required'/>
          </div>
          <div className='w-px h-15 bg-gray-300/70 max-md:hidden'>

          </div>

          <div className='flex flex-col '>
            <label htmlFor='guests' className='font-medium '>Guests</label>
            <input type="number" id='guests'placeholder='0'className='max-w-20 ounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'required/>
          </div>

        </div>

        <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-24 py-3 md:py-4 text-base cursor-pointer'>
          Check Availability 
        </button>
      
      </form>

      {/* Common Specifications */}
      <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-center gap-2'>
            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
            <div>
              <p className='text-base'>{spec.title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Room Description */}
      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>Guests will be allocated on the ground floor according to availablity.You get a comofortable Two bedroom apartment has a true city feeling.The price qouted is for two guests,at the guest slot please mark the number of guests to get the exact price for groups.The Guests will be allocated ground floor according to availablity.You get the comofortable bedroom apartment that has a true city feeling.</p>

      </div>
      {/*Hosted By  */}

      <div className='flex flex-col items-start gap-4'>
        <div className='flex gap-4'> 
          <img src={room.hotel.owner.image} alt="Host" className='w-14 h-14 md:h-18 md:w-18 rounded-full ' />
          <div>
            <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
            <div className='flex items-center  mt-1'>
              <StarRating/>
              <p className='ml-2'>200 + reviews</p>
            </div>
          </div>
         </div>
         <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>


      </div>

    </div>
  );
};

export default RoomDetails;
