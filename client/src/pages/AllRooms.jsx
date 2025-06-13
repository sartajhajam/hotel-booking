// Import necessary dependencies
import React, { useMemo } from "react";
import { useState } from "react";
import { facilityIcons, roomsDummyData, assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import { useAppContext } from "../context/appContext";

const CheckBox =({label, selected = false ,  onChange =()=>{}})=>{
  return(
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm text-gray-800">
      <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked , label )} />
      <span className="font-light select-none">{label}</span>
    </label>
  )
}

const RadioButton  =({label, selected = false ,  onChange =()=>{}})=>{
  return(
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm text-gray-800" >
      <input type="radio" name="sortOption" checked={selected} onChange={()=>onChange(label )} />
      <span className="font-light select-none">{label}</span>
    </label>
  )
}

const AllRooms = () => {

  // Initialize navigation hook
  const [searchParams,setSearchParams] = useSearchParams()
  const {rooms,navigate, currency} = useAppContext();
  const [openFilters, setOpenFilters] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    roomType:[],
    priceRange:[],
    
  });

  const [selectedSort, setSelectedSort ] = useState('')

  const roomTypes = [
    "Single Room",
    "Double Room",
    "Luxury Room",
    "Family Room",
  ];

  const priceRange = [
    '0 to 500 ',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000',
    '3000 to 4000',
  ];
  const sortOptions = [
    'Price: Low to High',
    'Price: High to Low',
    'Newest First',
    'Oldest First',
  ];

  // Handle changes for filters annd sorting
  const handleFilterChange = (checked, value,type ) =>{
    setSelectedFilters((prevFilters)=>{
      const updatedFilters = {...prevFilters}
      if(checked){
        updatedFilters[type].push(value);
      }else {
        updatedFilters[type] = updatedFilters[type].filter(item => item !== value);
      }
      return updatedFilters;

    })

  }

  const handleSortChange = (sortOption)=>{
    setSelectedSort(sortOption);
  }

  // function to check if a room matches the selected room types 

  const matchesRoomType = (room)=>{
    return selectedFilters.roomType.length === 0 || selectedFilters.roomType.includes(roomTypes);

  }

  //function to check if a room matches the selected price ranges 
  const matchesPriceRange = (room)=>{
    return selectedFilters.priceRange.length === 0 || selectedFilters.priceRange.some(range =>{
      const [min, max ] = range.split(' to ').map(Number);
      return room.pricePerNight >= min && room.pricePerNight <= max;
    })
  }

  // function to sort rooms based on the selected sort options 
  const sortRooms = (a , b) =>{
    if (selectedSort === 'Price Low to High'){
      return a.pricePerNight -b.pricePerNight;
    }
    if(selectedSort === 'Price High to Low'){
      return b.pricePerNight - a.pricePerNight;
    }
    if(selectedSort === 'Newest First'){
      return new DataTransfer(b.createdAt) - new Date(a.createdAt)
    }
    return 0;
  }

  // function to filter destination
  const filterDestination = (room) => {
    const destination = searchParams.get('destination');
    if(!destination)return true;
    return room.hotel.city.toLowerCase().includes(destination.toLowerCase())
  }

  // Filter and sort rooms based on the selected filters and sort option

  const filteredRooms = useMemo(()=>{
    return rooms.filter(room => matchesRoomType(room)&& matchesPriceRange(room)) && filterDestination(room)).sort(sortRooms);
  }[rooms,selectedFilters,selectedSort,searchParams]


  })

  // Clear All Filters 
  const clearFilters = () => {
    setSelectedFilters({
      roomType:[],
      priceRange:[],
    });
    setSelectedSort('');
    setSelectedParams({});
  }



  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 mf:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Main content section */}
      <div>
        {/* Header section */}
        <div>
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            The advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {/* Room cards section */}
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="flex flex-col md:flex-row  items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            {/* Room image */}
            <img
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              className="md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                window.scrollTo(0, 0);
              }}
            />

            {/* Room details */}
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  window.scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>

              {/* Rating section */}
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>

              {/* Location section */}
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room Amenities  */}
              <div className="flex flex-wrap items-center  mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70">
                    <img src={facilityIcons[item]} alt={item}
                    className="w-5 h-5 " />
                    <p className="text-xs">{item}</p>

                  </div>  
                  ))}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters section */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-300">
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setOpenFilters(!openFilters)} 
              className="lg:hidden text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              {openFilters ? 'HIDE' : 'SHOW'}
            </button>
            <button 
              className="hidden lg:block text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              CLEAR ALL
            </button>
          </div>
        </div>
        <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
          <div className="px-5 pt-5">
            <p p className="font-medium text-gray-800 pb-2 ">Popular Filters</p>
            {roomTypes.map((room, index)=>(
              <CheckBox key={index} label={room} selected={selectedFilters.roomType.includes(room)} onChange={()=> handleFilterChange (checked,room,'roomType')} />
            ))  }
          </div>

          <div className="px-5 pt-5">
            <p p className="font-medium text-gray-800 pb-2 ">Price Range</p>
            {priceRange.map((range, index)=>(
              <CheckBox key={index} label={`$$(currency) ${range}`} selected={selectedFilters.priceRange.includes(range)} onChange={()=> handleFilterChange (checked,range,'priceRange')}/>
            ))  }
          </div>


          <div className="px-5 pt-5">
            <p p className="font-medium text-gray-800 pb-2 ">Sort By </p>
            {sortOptions.map((option, index)=>(
              <RadioButton key={index} label={option} selected={selectedSort === option} onChange={()=> handleSortChange(option)}/>
            ))  }
          </div>

        </div>


      </div>


    </div>
  );
};









export default AllRooms;
