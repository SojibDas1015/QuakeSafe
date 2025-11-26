import React, { useState } from 'react'

export default function Area() {
    const [length, setlenth] = useState("");
    const [width, setwidth] = useState("");
    const [result, setresult] = useState(0);
    const handaler = (e) => {
        e.preventDefault();
        if(length.length > 0 && width.length > 0)
        {const multi = (parseInt(length) * parseInt(width));
        setresult(multi);}
    }
    console.log(result);
    return (
        <div className='w-11/12 mx-auto py-14'>
            <div>
                <h1 className='text-4xl font-bold text-center'>Area</h1>
                <form className='flex flex-col items-center justify-center gap-4 py-8'>
                    <label htmlFor="" className='flex flex-col'> Enter Your Length:
                        <input className='outline-1 outline-black rounded-sm py-2 px-4' placeholder='Enter Length' type="text" name="" id="" required
                            value={length}
                            onChange={(e) => setlenth(e.target.value)}
                        />
                    </label>
                    <label htmlFor="" className='flex flex-col'> Enter Your Width:
                        <input className='outline-1 outline-black rounded-sm py-2 px-4' placeholder="Enter width" type="text" name="" id="" required
                            value={width}
                            onChange={(e) => setwidth(e.target.value)}
                        />
                    </label>
                </form>
                <div className='text-center'>
                    <label htmlFor="" className=''>Area Is:
                        <p className='w-58 mx-auto border-1 border-black rounded-sm py-2 px-4 flex justify-center items-center '>{result}</p>
                    </label>
                    <button className='border-1 border-black rounded-sm py-2 px-4 mt-4 w-58 mx-auto' onClick={(e) => handaler(e)}>submit</button>
                </div>
            </div>
        </div>
    )
}
