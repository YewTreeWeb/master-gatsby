import React from 'react'
import { Footer } from './Footer'
import Nav from './Nav'

// Destructure children from props to stop props being one big payload
export const Layout = ({ children }) => {
  console.log({ children })

  return (
    <div>
      <Nav />
      { children }
      <Footer />
    </div>
  )
}
