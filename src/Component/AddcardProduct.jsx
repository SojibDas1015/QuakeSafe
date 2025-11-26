import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useLoaderData } from 'react-router'

export default function AddcardProduct() {
    const data = useLoaderData()
    return (
        <div className='w-11/12 mx-auto '>
            <div className='space-y-2  py-4 px-4 rounded-xl min-h-80 flex'>
                <div className='w-1/2'>
                    <h2 className='text-4xl font-bold mb-4'>{data.title}</h2>
                    <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique eos quia praesentium ea dolores aperiam dignissimos vel deserunt vitae ratione aliquam voluptates, rerum, optio recusandae nihil debitis eum, adipisci vero quas accusamus deleniti! Rerum quo dolorem tempora quis hic tenetur commodi. Odit corporis quisquam error suscipit commodi impedit incidunt.</p>
                    <p>Ratings: {data.ratings}</p>
                    <p>Made In: {data.madeIn}</p>
                    <p className='text-black'>Price: {data.price}$</p>
                    <div className=' space-y-4 '>
                        <div>
                            <button className='px-4 py-2 rounded-md bg-gray-200'>Buy Now</button>
                        </div>
                        <button className='flex items-center text-[12px] font-semibold bg-[#df914342] text-[#57391bf2] py-1 px-2 rounded-sm'><IoCartOutline className='text-[16px]' />Add</button>
                    </div>
                </div>
                <img className='w-1/2 h-120 object-cover rounded-md' src={data.image} alt="" />
            </div>
        </div>
    )
}
