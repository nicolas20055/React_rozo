import React from 'react'
import { Navbar } from "../Navbar/Navbar"
import "./Header.css"

export const Header = () => {
    return (

        <header className='w-full  flex justify-around flex-row gap-150 mt-3 p-1 rounded-xl bg-sky-950 items-center'  >
            <h1 className = " text-sky-600 text-4x1 font-extrabold w-3/4 flex justify-around"> Introduccion a React 2025</h1>
        <Navbar />
        </header>
        


    )
}
