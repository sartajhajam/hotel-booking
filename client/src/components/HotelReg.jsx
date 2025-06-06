import React from 'react'
import { assets, cities } from '../assets/assets'
import { useAppContext } from '../context/appContext'
import toast from 'react-hot-toast'

const HotelReg = () => {
  const {setShowHotelReg , axios , getToken,setIsOwner } = useAppContext()

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')


  const onSubmitHandler = async (event)=> {
    try {
      event.preventDefault();
      const {data} =  await axios.post(`/api/hotels`,{name, contact,address,city},{headers:{Authorization:`Bearer ${await getToken()}`}})

      if(data.success){
        toast.success(data.message)
        setIsOwner(true)
        setShowHotelReg(false);
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message) 
      
    }


  }

  return (
    <div onClick={()=> setShowHotelReg(false)} className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
      <form onSubmit={onSubmitHandler} onClick={() =>e.StopPropagation ()} className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        <img src={assets.regImage} alt="Hotel Registration" className='w-1/2 object-cover rounded-xl hidden md:block' />

        <div className='relative flex flex-col items-center  md:w-1/2  md: p-8 '>
          <img src={assets.closeIcon} alt="close-icon" className='w-4 h-4 absolute top-4 right-4 cursor-pointer'
          onClick={() => setShowHotelReg(false)} />
          <p className='text-2xl font-semibold mt-6 '>Register Your Hotel </p>

          {/*Hotel Name */}
          <div className='w-full mt-4'>
            <label htmlFor='name' className='font-medium text-gray-500'>
              Hotel Name
            </label>
            <input type='name' onChange={(e) => setName(e.target.value)} placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light required'></input>

          </div>

          {/*Hotel Phone */}

          <div className='w-full mt-4'>
            <label htmlFor='contact' className='font-medium text-gray-500'>
              Phone
            </label>
            <input onChange={(e) => setContact(e.target.value)} id='contact' type='text' placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light required'></input>

          </div>

          {/*Hotel Address  */}

          <div className='w-full mt-4'>
            <label htmlFor='address' className='font-medium text-gray-500'>
              Address
            </label>
            <input onChange={(e) => setAddress(e.target.value)} id='address' type='text' placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light required'></input>

          </div>
          {/*Select City Drop Down   */}
          <div className='w-full mt-4 max-4 max-w-60 mr-auto'>
            <label htmlFor='city' className='font-medium text-gray-500'>City</label>
          <select onChange={(e) => setCity(e.target.value)} id='city' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light required'>
              <option value=''>Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
          </div>
          <button className='bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-lg mt-8 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 cursor-pointer w-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>Register</button>



        </div>00

      </form>
    </div>
  )
}

export default HotelReg
