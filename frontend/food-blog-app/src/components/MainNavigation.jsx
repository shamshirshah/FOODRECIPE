import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function MainNavigation() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

