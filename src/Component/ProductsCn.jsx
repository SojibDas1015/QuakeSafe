import React, { use } from 'react'
import { UserContext } from '../UserContext/UserContext'
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

export default function ProductsCn() {
  const { product, filter, pload, catagories, selectcat, setselectcat, addcard, setaddcard , setproductid} = use(UserContext);

  const handaleeradd = (d) => {
    setaddcard(prev => prev + 1);
  }
  return (
    <div className='w-11/12 mx-auto py-8'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 '>
        {
          catagories.map((data) =>
            <div >
              <button onClick={() => setselectcat(data)} className={`font-bold px-8 py-2
                  
                  ${selectcat == data ? "bg-[#df9143a0] w-full rounded-xl" : "hover:bg-[#df9143a0] border-1 w-full border-gray-400 rounded-xl"}
                  `}>{data}</button>
            </div>
          )
        }
      </div>
      {
        pload ?
          (<div>Loading....</div>)
          : filter.length > 0 ? (<>
            <div className='grid grid-cols-2 lg:grid-cols-4 py-8 gap-4'>
              {filter.map((pdata) =>
                <div className='space-y-2 bg-white drop-shadow-xl py-4 px-4 rounded-xl hover:scale-105 duration-150 border-1 border-gray-200 min-h-80'>
                  <NavLink to={`/products/${pdata.id}`}>
                    <img className='w-full h-40 object-cover rounded-md' src={pdata.image} alt="" />
                    <h2 className='font-bold'>{pdata.title}</h2>
                  </NavLink>
                  <p>Ratings: {pdata.ratings}</p>
                  <p>Made In: {pdata.madeIn}</p>
                  <div className='flex justify-between'>
                    <p className='text-black'>Price: {pdata.price}$</p>
                    <button onClick={(d) => handaleeradd(0)} className='flex items-center text-[12px] font-semibold bg-[#df914342] text-[#57391bf2] py-1 px-2 rounded-sm'><IoCartOutline className='text-[16px]' />Add</button>
                  </div>
                </div>
              )}
            </div>
          </>) : (<p>No Product Found</p>)
      }

    </div>
  )
}
