import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar/Navbar'

function Main() {
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Main