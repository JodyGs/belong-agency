import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Container({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Container