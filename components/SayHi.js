import Link from 'next/link';
import React from 'react'
import Marquee from 'react-fast-marquee';


function SayHi() {
  return (
<Marquee className='border-2 border-black   text-3xl font-agrandir-grand pt-3 font-bold' speed={100} gradient={false} direction='right'>
  <Link href={'/contact'}><p className='text-belrose mr-10 md:mr-40'>Say Hi !</p></Link>
  <Link href={'/contact'}><p className='text-belorange mr-10 md:mr-40'>Say Hi !</p></Link>
  <Link href={'/contact'}><p className='text-belviolet mr-10 md:mr-40'>Say Hi !</p></Link>
  <Link href={'/contact'}><p className='text-belrose mr-10 md:mr-40'>Say Hi !</p></Link>
  <Link href={'/contact'}><p className='text-belorange mr-10 md:mr-40'>Say Hi !</p></Link>
  <Link href={'/contact'}><p className='text-belviolet mr-10 md:mr-40'>Say Hi !</p></Link>
</Marquee>
  )
}

export default SayHi