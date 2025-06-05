import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'
import { useAppContext } from '../../context/appContext'
import toast from 'react-hot-toast'

const AddRoom = () => {
  const {axios, getToken} = useAppContext()



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
      'Free Wifi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false
    }
  })

  const [loading, setLoading] = useState(false)


  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    // check if all inputs are filled 
    if (!inputs.roomType || inputs.pricePerNight || inputs.amenities || !
      Object.values(images).some(image => image)){
        toast.error("Please fill in all details ")
        return
      }
      setLoading(true);
      try {
        const formData = new FormData()
        formData.append('roomType', inputs.roomType)
        formData.append('pricePerNight', inputs.roompricePerNightType)
        // converting amenities to arrray and keeping only enabled amenities 
        const amenities = Object.keys(inputs.amenities).filter(key => inputs.amenities[key])
        formData.append('amenities',JSON.stringify(amenities))

        // adding images to form data 
        Object.keys(images).forEach((key)=>{
          images[key] && formData.append('images',images[key])
        })


        const {data}= await axios.post('/api/rooms/',formData , {headers:{Authorization: `Bearer ${await getToken}`}})
        if (data.success){
          toast.success(data.message)
          setInputs({
            roomType:' ',
            pricePerNight:0,
            amenities :{
              'Free Breakfast' : false,
              'Free Wifi': false,
              'Room Service':false,
              'Mountain View0':false,
              'Pool Access':false
            }
          })
        }



      } catch (error){

      }
    
  }
  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
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


      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 mt-4'>Room Type </p>
          <select value={inputs.roomType} onChange={e=> setInputs({...inputs, roomType: e.target.value})}
          className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full '  id="">
            <option value="">Select Room Type</option>
            <option value="single_bed">Single Bed </option>
            <option value="double_bed ">Double Bed </option>
            <option value="luxury_room">Luxury Room </option>
            <option value="suite"> Family Suite </option>
          </select>

        </div>
        <div>
          <p className='mt-4 text-gray-800'>
            Price <span className='text-xs text-gray-500'> /night </span>
          </p>

          <div className='relative mt-1'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>$</span>
            <input 
              type='number' 
              placeholder='0' 
              className='border border-gray-300 rounded p-2 pl-7 w-32 focus:outline-none focus:border-primary transition-colors' 
              value={inputs.pricePerNight} 
              onChange={e=> setInputs({...inputs,pricePerNight:e.target.value})} 
            />
          </div>
          
          </div>


      </div>


      <p className='text-gray-800 mt-4 '>Amenities</p>
      <div  className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
        {Object.keys(inputs.amenities).map((amenity,index) => (
          <div key={index} >
            <input type='checkbox' id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={(e) => setInputs({
              ...inputs,
              amenities: {
                ...inputs.amenities,
                [amenity]: !inputs.amenities[amenity]
              }
            })} />
            <label className='cursor-pointer' htmlFor="">{amenity}

            </label>
          </div>
          
        ))}
      </div>
      <button className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer'>
        Add Room 
      </button>
    </form>
    
  )
}

export default AddRoom
