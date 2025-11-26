import React, { use } from 'react'
import { UserContext } from '../UserContext/UserContext'

export default function ProjectNav() {
    const {project} = use(UserContext)
  return (
    <div className='w-11/12 mx-auto py-14'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-12 '>
                {
                    project.map((ser) =>
                        <div className='space-y-4 bg-white drop-shadow-xl py-4 px-4 rounded-xl border-1 border-gray-200'>
                            <img className='w-full h-80 object-cover rounded-md hover:scale-105 duration-150' src={ser.images} alt="" />
                            <h4 className='text-md font-bold '>{ser.title}</h4>
                            <p className=''>{ser.description}</p>
                            <p className=''>{ser.location}</p>
                            <p className=''>{ser.year}</p>
                            <p className=''>Area Sqft: {ser.area_sqft}</p>
                            <p className=''>Cost: {ser.cost_estimate_usd}$</p>
                            <p className=''>Name: {ser.slug}</p>
                        </div>
                    )
                }
            </div>
    </div>
  )
}
