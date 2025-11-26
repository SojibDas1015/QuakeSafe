import React from 'react'

export default function OurVision() {
  return (
    <div className='w-11/12 mx-auto py-14'>
      <div className='block lg:flex items-center justify-center'>
        <div className='w-full lg:w-1/2'>
            <img className='w-full' src="/imageshome/vision.png" alt="" />
        </div>
        <div className='w-full lg:w-1/2 space-y-4'>
            <p className='text-xl font-medium'>Our Vision</p>
            <h2 className='text-4xl font-bold'>Committed to Earthquake Safety and Innovation</h2>
            <p className='text-md text-justify'>Our vision is to create a world where every structure is designed with the utmost priority on safety and resilience. We strive to build earthquake-resistant buildings that not only protect lives but also stand as a testament to innovation, sustainability, and the advancement of modern construction techniques. By integrating the latest seismic technologies and eco-friendly practices, we aim to lead the way in creating safer, more sustainable environments for future generations.</p>
        </div>
      </div>
    </div>
  )
}
