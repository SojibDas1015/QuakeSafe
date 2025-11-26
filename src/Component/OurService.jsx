import React, { use } from 'react'
import { UserContext } from '../UserContext/UserContext'
import { NavLink } from 'react-router';

export default function OurService() {
    const { service, text } = use(UserContext);
    return (
        <div className='w-11/12 mx-auto py-14'>
            <h3 className='text-center text-2xl'>Our Services</h3>
            <h1 className='text-2xl lg:text-6xl font-bold'>Explore our <span className='text-[#b56a1e]'>Comprehensive</span> <br /><span className='text-[#b56a1e]'>Consulting</span> services</h1>
            <p className='mt-5'>We specialize in transforming visions into reality. Explore our portfolio of innovative architectural <br /> and interior design projects crafted with precision.</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 py-12 '>
                {
                    service.slice(0, 4).map((ser) =>
                        <div className='space-y-8 bg-white drop-shadow-xl py-4 px-4 rounded-xl hover:scale-105 duration-150 border-1 border-gray-200 '>
                            <img className='w-full h-40 object-cover rounded-md' src={ser.image} alt="" />
                            <h4 className='text-md font-bold '>{ser.title}</h4>
                            <p className='text-nowrap overflow-hidden text-ellipsis'>{ser.description}</p>
                        </div>
                    )
                }
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                {
                    text.map((text) =>
                        <div className='space-y-4 py-8'>
                            <h1 className='text-6xl font-bold mb-12'>{text.number}</h1>
                            <hr />
                            <h3 className='text-2xl font-bold'>{text.title}</h3>
                            <p>{text.description}</p>
                        </div>
                    )
                }
            </div>
            <div className='block lg:flex items-center justify-center py-12'>
                <h1 className='w-full text-center lg:text-left lg:w-1/4 text-9xl font-bold text-gray-100'>antra</h1>
                <img className='w-full lg:w-1/2' src="/imageshome/Serviceimg.png" alt="" />
            </div>
            <NavLink to="/services"><div className='text-center '>
                <button className='py-2 px-4 bg-gray-200 cursor-pointer'>See More Service</button></div></NavLink>
        </div>
    )
}
