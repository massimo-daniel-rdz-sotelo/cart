import React from 'react'


export const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-violet-800 text-white'>
        <ul className='list-none flex gap-4 font-bold cursor-pointer text-white'>
            <li>
                <a> catalogo </a>
            </li>
            <li>
                <a> carrito </a>
            </li>

        </ul>
    </div>

  )
}
