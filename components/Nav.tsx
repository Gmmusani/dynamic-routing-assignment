import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <ul className='h-14 flex justify-center items-center bg-sky-300 text-blue-950'>
            <li className='mr-20'><Link href="/">Home</Link></li>
            <li><Link href="/country">Countries</Link></li>
        </ul>
    </>
  )
}

export default Navbar
