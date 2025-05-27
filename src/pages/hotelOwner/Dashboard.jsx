import React from 'react'
import { dashboardDummyData,  } from '../../assets/assets'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData)
  
  return (
    <div>
      <Title align='left' font='outfit' title='Dashboard'subTitle='Monitor your room listing,track bookings and analyse revenueall in one place.Stay updated with real-time insights and make informed decisions to enhance your hotel management.'/>
      <div className='flex gap-4 my-8'>
        {/* -------Total Bookings*/}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 '>
        <img src="{assets.totalBookingIcon}" alt="Total Bookings" className='max-sm:hidden h-10' />
        <div>
          <p className='text-blue-500-lg'>Total Bookings </p>
          <p className='text-neutral-400 text-base '>{dashboardData.totalBookings}</p>
        </div>

        </div>
        {/* -------Total Revenue*/}
        <div>



        </div>


      </div>
      
    </div>
  )
}

export default Dashboard
