import React, { use } from 'react'
import { UserContext } from '../UserContext/UserContext'

export default function EarthQuekeD() {
    const { earth, earloading } = use(UserContext);
    if (earloading) return <p>loadding...</p>
    return (
        <div className='w-11/12 mx-auto py-6'>
            <h1 className='text-center text-4xl font-bold'>Recent 30Days EarthQueke In Bangladesh</h1>
            <div className='py-8 lg:flex justify-between'>
                {
                    earth.features.map((data) =>
                        <div className='py-8'>
                            <p className='text-3xl'><span className='text-3xl font-bold'>Place:</span> {data.properties.place}</p>
                            <p className='text-3xl'><span className='font-bold'>Point:</span> {data.properties.mag}</p>
                            <p className='text-3xl'><span className='font-bold'>Time:</span> {new Date(data.properties.time).toLocaleString('en-Us',{
                                hour12: true
                            })}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
