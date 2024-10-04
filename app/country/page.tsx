import Link from 'next/link';
import React from 'react';

const CountryList = () => {
  return (
    <div>
      <h1 className='text-3xl text-center p-5 bg-zinc-500'>Countries List</h1>
      <ul>
        <li className='bg-slate-400 m-3 text-center'><Link href="/country/pakistan">Pakistan</Link></li>
        <li className='bg-slate-400 m-3 text-center'><Link href="/country/india">India</Link></li>
        <li className='bg-slate-400 m-3 text-center'><Link href="/country/australia">Australia</Link></li>
        <li className='bg-slate-400 m-3 text-center'><Link href="/country/england">England</Link></li>
      </ul>
    </div>
  )
}

export default CountryList
