import React from 'react'
import Header from '../components/Header'

function presse() {
  return (
    <div>
      <Header />
      <h1 className='text-9xl text-center font-sweet-sans-pro font-bold mt-32'>presse</h1>
      <p className='my-8 max-w-2xl text-center mx-auto'>We have <span className='font-bold'>strong and long</span> lasting relationships white <span className='italic'>the media</span> that matter. This translates into <span className='font-bold'>Excellent</span> coverage for every <span className='italic'>client</span> we work with.</p>

      <div className='flex justify-between max-w-2xl mx-auto'>
        <button className='belButton max-w-[300px]'>print</button>
        <button className='belButton max-w-[300px]'>digital</button>
      </div>
    </div>
  )
}

export default presse