// import React, { use } from 'react'
// import { UserContext } from '../UserContext/UserContext'
// import { Navigate } from 'react-router';

export default function ContactUs() {
    // const { login } = use(UserContext);
    // const Navigate = Navigate();
    // const hander = () =>
    // {
    //     if(!login){
    //         Navigate("/login")
    //     }
    // }
    return (
        <div >
            <div className='w-full h-[200px] relative'>
                <img className='w-full h-full object-cover object-top' src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-slider1.jpg" alt="" />
                <h1 className='text-4xl lg:text-7xl font-bold absolute left-1/2 top-1/2 -translate-1/2'>Contact us</h1>
            </div>
            <div className='w-11/12 mx-auto py-6'>
                <h1 className='text-2xl lg:text-5xl font-bold'>Have a Project in <span className='text-[#b56a1e]'>Mind? Let’s</span> <br /><span className='text-[#b56a1e]'>Make</span> It Happen</h1>


                <div className='block lg:flex justify-between gap-6 py-12'>
                    <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
                        <img className='rounded-xl' src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/contact-image-1.jpg" alt="" />
                    </div>
                    <form className='grid grid-cols-2 gap-4 w-full lg:w-1/2 box-border'>
                        <label htmlFor="" className='font-bold'>Full Name:
                            <input className='outline-1 block w-full rounded-md py-2 pl-4 font-medium' placeholder='Your Name' type="text" name="" id="" />
                        </label>
                        <label htmlFor="" className='font-bold'>Phone:
                            <input className='outline-1 block w-full rounded-md py-2 pl-4 font-medium' placeholder='Phone' type="number" name="" id="" />
                        </label>
                        <label htmlFor="" className='font-bold'>Email Address:
                            <input className='outline-1 block w-full rounded-md py-2 pl-4 font-medium' placeholder='Email Address' type="email" name="" id="" />
                        </label>
                        <label htmlFor="" className='font-bold'>Subject:
                            <input className='outline-1 block w-full rounded-md py-2 pl-4 font-medium' placeholder='Subject' type="text" name="" id="" />
                        </label>
                        <label htmlFor="" className='col-span-2 font-bold'>Your Message:
                            <textarea className='outline-1 block w-full  rounded-md py-2 pl-4 font-medium' placeholder='Message' name="" id="" cols="30" rows="9"></textarea>
                        </label>
                        <button  className='outline-1 block w-full  rounded-md py-2'>Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
