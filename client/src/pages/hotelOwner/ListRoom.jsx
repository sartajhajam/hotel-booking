import React, { useState } from 'react'
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  const handleAvailabilityToggle = (index) => {
    setRooms(prevRooms => {
      const updatedRooms = [...prevRooms];
      updatedRooms[index] = {
        ...updatedRooms[index],
        isAvailable: !updatedRooms[index].isAvailable
      };
      return updatedRooms;
    });
  };

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View,edit,or manage all listed rooms. Keep the information up to date to provide the best experience for users"
      />
      <p className="text-gray-800 mt-8"> All Rooms </p>

      <div className="w-full max-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium w-1/4">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium w-1/3 max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium w-1/6 text-center">
                Price / night
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium w-1/6 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                  ${item.pricePerNight}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 text-center">
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() => handleAvailabilityToggle(index)}
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300 ease-in-out"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out peer-checked:translate-x-5"></span>
                    <span className="text-xs text-gray-500">
                      {item.isAvailable ? 'Available' : 'Unavailable'}
                    </span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
