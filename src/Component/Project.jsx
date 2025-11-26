import React, { use } from 'react'
import { UserContext } from '../UserContext/UserContext'
import { NavLink } from 'react-router';

export default function Project() {
    const { project } = use(UserContext);
    return (
        <div className='w-11/12 mx-auto py-14'>
            <h1 className='text-2xl lg:text-6xl font-bold'>Explore our <span className='text-[#b56a1e]'>Creative </span> <br /><span className='text-[#b56a1e]'>Projects that</span> Our style</h1>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 py-12 '>
                {
                    project.slice(0, 4).map((ser) =>
                        <div className='space-y-8 bg-white drop-shadow-xl py-4 px-4 rounded-xl hover:scale-105 duration-150 border-1 border-gray-200'>
                            <img className='w-full h-40 object-cover rounded-md' src={ser.images} alt="" />
                            <h4 className='text-md font-bold '>{ser.title}</h4>
                            <p className='text-nowrap overflow-hidden text-ellipsis'>{ser.description}</p>
                        </div>
                    )
                }
            </div>

            <div className='py-20'>
                <div className='relative'>
                    <img className='' src="https://i.ibb.co.com/6cJ8CXrB/h1-banner03.png" alt="" />
                    <h1 className='text-6xl lg:text-9xl font-bold absolute left-1/2 -top-2 -translate-1/2 -z-10 text-gray-100'>Interior</h1>
                </div>
            </div>
            <NavLink to="/project"><div className='text-center '>
                <button className='py-2 px-4 bg-gray-200 cursor-pointer'>See More Service</button></div></NavLink>
        </div>
    )
}
