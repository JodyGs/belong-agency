import Link from 'next/link'
import React from 'react'

function Pills() {
  return (
    <div className='uppercase flex flex-col items-center space-y-3 m-32 w-2/5 mx-auto font-bold text-sm'>
      <div className='pills hover:bg-belvert'><Link href={'/contact'}>Press Relations</Link></div>
      <div className='pills'><Link href={'/contact'}>Influencer Marketing</Link></div>
      <div className='pills'><Link href={'/contact'}>360˚ Strategy</Link></div>
      <div className='pills'><Link href={'/contact'}>Strategic Partnerships</Link></div>
      <div className='pills'><Link href={'/contact'}>Events</Link></div>
      <div className='pills'><Link href={'/contact'}>Content Production</Link></div>
    </div>
  )
}

export default Pills