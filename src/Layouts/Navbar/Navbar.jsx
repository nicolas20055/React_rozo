import React from 'react'
import { ItemNavbar } from "../../components/ItemNavbar";

export const Navbar = () => {
  return (
    <nav className='w-full flex justify-around '> 
      <ul className='w-3/4 flex justify-around text-sky-100'>

      <ItemNavbar 
      Content = "Home"
      />

      <ItemNavbar 
      Content = "clase1"
      
      />
      <ItemNavbar
      
      Content = "clase 2"
      />
        
      </ul>
    </nav>
  )
}
