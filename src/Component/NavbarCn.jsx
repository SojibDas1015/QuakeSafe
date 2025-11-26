import React, { use } from 'react'
import { HiMiniShoppingCart } from 'react-icons/hi2'
import { NavLink } from 'react-router'
import { UserContext } from '../UserContext/UserContext'

export default function NavbarCn() {
  const { login, logoutweb, addcard, productid } = use(UserContext);
  return (
    <div className='sticky left-0 top-0 z-100 bg-black backdrop-blur-md'>
      <div className="flex w-11/12 mx-auto py-4 text-white">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <ul className="p-2">
                  <NavLink to="/earthqueke"><li>EarthQueke</li></NavLink>
                  <NavLink to='/products'><li>Products</li></NavLink>
                  <NavLink to="/services"><li>Services</li></NavLink>
                  <NavLink to="/area"><li>Area</li></NavLink>
                  <NavLink to='/products'><li>Products</li></NavLink>
                  <NavLink to="/project"><li>Projects</li></NavLink>
                  <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <li className="btn-ghost text-xl font-bold list-none">QuakeSafe</li>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 flex items-center gap-4">
            <NavLink to="/earthqueke"><li>EarthQueke</li></NavLink>
            <NavLink to="/services"><li>Services</li></NavLink>
            <li>
              <details>
                <summary className='cursor-pointer'>Calculators</summary>
                <ul className="p-2 bg-black">
                  <NavLink to="/area"><li>Area</li></NavLink>
                </ul>
              </details>
            </li>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to="/project"><li>Projects</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div className='relative'>
            <HiMiniShoppingCart className='text-2xl' />
            {
              <div className='bg-white text-black rounded-full w-4 h-4 flex justify-center items-center absolute left-0 bottom-0'>
                <p className='text-[10px] font-bold'>{addcard}</p>
              </div>
            }
          </div>
          {
            !login && (
              <NavLink to='/login'>
                <button className='cursor-pointer'>Login</button>
              </NavLink>
            )
          }


          {
            login && (
              <ul className='menu-horizontal'>
                <li>
                  <details>
                    <summary className='cursor-pointer'>
                      <div className="avatar cursor-pointer">
                        <div className="w-8 rounded-full bg-white text-black  font-bold flex justify-center items-center">
                          {login.email[0].toUpperCase()}
                        </div>
                      </div>
                    </summary>
                    <ul className='p-2 bg-black'>
                      <li>{login.email}</li>
                      <li><button onClick={logoutweb} className='cursor-pointer'>logout</button></li>
                    </ul>
                  </details>
                </li>
              </ul>
            )
          }
        </div>
      </div>
    </div>
  )
}
