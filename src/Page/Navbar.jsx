import React from 'react'
import NavbarCn from '../Component/NavbarCn'
import { Outlet } from 'react-router'
import FooterCn from '../Component/FooterCn'
import { Toaster } from 'react-hot-toast'

export default function Navbar() {
  return (
    <div>
      <NavbarCn></NavbarCn>
      <Toaster></Toaster>
      <Outlet></Outlet>
      <FooterCn></FooterCn>
    </div>
  )
}
