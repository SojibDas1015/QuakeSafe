import React, { use, useState } from 'react'
import { UserContext } from '../UserContext/UserContext'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export default function Login() {

  const { loginweb } = use(UserContext);
  const navigate = useNavigate();
  const [input, setinput] = useState({ email: "", password: "" });
  const [error, seterror] = useState("");

  const handaler = (event) => {
    event.preventDefault();

    const res = loginweb(input.email, input.password);

    if (res.success) {
      Swal.fire({
        title: "Log in Successful!",
        icon: "success",
        draggable: true
      });
      navigate("/");
    }
    else
    {
      seterror(res.message);
      toast.error(res.message)
    }
  }
  return (
    <div>
      <div className='h-[500px] bg-[url("https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/68917790b8c539ce750d01f1_image-109744.png")] bg-no-repeat bg-cover bg-bottom text-white py-10'>
        <div className='bg-black/30 lg:bg-black/1 backdrop-blur-xl text-white w-3/4 lg:w-5/12 mx-auto rounded-2xl px-10 lg:p-0'>
          <div className='flex justify-center'>
            <form onSubmit={handaler} className=' w-full lg:w-8/10 box-border py-10'>
              <div className='mb-8'>
                <h3 className='text-2xl font-bold'>Login</h3>
                <p>Welcome Back Please Login To Your Account</p>
              </div>
              <label htmlFor="" className='font-bold'>Email:
                <input className='outline-1 outline-white block w-full rounded-md py-2 pl-4 font-medium mb-8' placeholder='Email Address' type="email" name="" id="" 
                value={input.email}
                onChange={e=> setinput({...input, email: e.target.value})}
                required
                />
              </label>
              <label htmlFor="" className='font-bold'>Password:
                <input className='outline-1 outline-white block w-full rounded-md py-2 pl-4 font-medium mb-8' placeholder='Password' type="password" name="" id="" 
                value={input.password}
                onChange={e=> setinput({...input, password: e.target.value})}
                required
                />
              </label>
              {
                error && <p>{error}</p>
              }
              <button className='outline-1 block w-full  rounded-md py-2 bg-[#b9b9b933] font-bold'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
