import React, { use } from 'react'
import { assets, roomsDummyData } from '../assets/assets';

const RoomDetails = () => {
  const {id} = useParams();
  // Fetch room details using the id from the URL
  const [room,setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id) 
        room && setRoom(room)
        room && setMainImage(room.images[0]);      
    }, [])

  return room &&  (
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
      <div className='flex flex-col lg:flex-row gap-6 mt-6'>

        <div className='lg:w1/2 w-full'>
          <img src={mainImage} alt="Room" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map ((image, index) => (
            <img onClick={() => setMainImage(image)}
            key={index} src={image} className={`w-full rounded-xl shadow-md cursor-pointer object-cover ${mainImage === image ? 'outline-3 outline-orange-500' : ''}`} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default RoomDetails
