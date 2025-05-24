import React, { use } from 'react'
import { roomsDummyData } from '../assets/assets';

const RoomDetails = () => {
  const {id} = useParams();
  // Fetch room details using the id from the URL
  const [room,setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => {
      if (room.id === id) {
        setRoom(room);
        setMainImage(room.images[0]);
      }
    }

  },[])
  return (
    <div>
      
    </div>
  )
}

export default RoomDetails
