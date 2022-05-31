import React from 'react'
import Marquee from 'react-fast-marquee';


function SayHi() {
  return (
<Marquee className='border-2 border-black   text-7xl font-agrandir-grand pt-6 font-bold' speed={100} gradient={false} direction='right'>
  <p className='text-belrose mr-36'>Say Hi !</p>
  <p className='text-belorange mr-36'>Say Hi !</p>
  <p className='text-belviolet mr-36'>Say Hi !</p>
  <p className='text-belrose mr-36'>Say Hi !</p>
  <p className='text-belorange mr-36'>Say Hi !</p>
  <p className='text-belviolet mr-36'>Say Hi !</p>
</Marquee>
  )
}

export default SayHi