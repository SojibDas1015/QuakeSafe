import React, { use } from 'react'
import { UserContext } from '../UserContext/UserContext'
import { NavLink } from 'react-router';

export default function ServiceHome() {
    const { service, setservice } = use(UserContext);
    return (

        <div className='w-11/12 mx-auto py-14'>
            <h3 className='text-center text-2xl'>Our Services</h3>
            <div className='grid grid-cols-5 gap-5 py-12'>
                {
                    service.map((ser) =>
                        <NavLink to={`/services/${ser.id}`}>
                            <div className='space-y-8 bg-white drop-shadow-xl py-4 px-4 rounded-xl hover:scale-105 duration-150 border-1 border-gray-200 min-h-80'>
                                <img className='w-full h-40 object-cover rounded-md' src={ser.image} alt="" />
                                <h4 className='text-xl font-bold text-nowrap overflow-hidden text-ellipsis'>{ser.title}</h4>
                                <p className='text-nowrap overflow-hidden text-ellipsis'>{ser.description}</p>
                            </div>
                        </NavLink>
                    )
                }
            </div>
        </div>

    )
}
