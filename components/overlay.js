import React from 'react'

function overlay() {
  return (
    <div className='h-screen w-full bg-belorange relative'>
      <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <button className='overlayButton'>Français</button>
        <button className='overlayButton'>English</button>
      </div>
    </div>
  )
}

export default overlay