import React from 'react'
import { assets } from '../../assets/assets'

const AddRoom = () => {


  const [images,setImages] =useState({
    1: null,
    2: null,
    3: null,
    4: null
  })

  const [inputs,setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi' :false, 
      'Free Breakfast': false, 
      'Room Service ': false, 
      'Mountain View': false},
      'Pool Access': false
    }
  })
  
  return (
    <form className='flex flex-col gap-4'>
      <Title align='left' font='outfit' title='Add Room' subTitle='Fill in the details carefully and accurate room details,pricing and amenities, to enhance the user booking preference '/>
      
      {/* Upload Area For Images */}
      <p className='text-gray-800 mt-10'> Images </p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImages-${key}`} key={key}>
            <img className='max-h-13 cursor-pointer opacity-80'
            src={images[key] ? URL.createObjectURL(images[key]):assets.uploadArea} alt="" />
            <input type="file" accept='image/*' id={`roomImages-${key}`} className='hidden' onChange={(e) => setImages({...images, [key]: e.target.files[0]})} />
          </label>
        ))}
      </div>


      <div>
        
      </div>


    </form>
  )
}

export default AddRoom
