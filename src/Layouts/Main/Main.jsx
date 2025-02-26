import React from 'react'
import  imagen1  from '../../assets/Images/imagen1.jpg'

export const Main = () => {
    return (
        <>
            <main className='flex  flex-col '  >
                <h1 className='  text-amber-300 font-extrabold w-3xl flex justify-around h-15'>la idea es que aca construiremos nuestro curso de cada tema</h1>
                
                <img className="min-w-3xl  h-1/2 " src={imagen1} alt ="imagen"  />
            </main>
        </>
    )
}
