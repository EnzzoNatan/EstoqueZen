import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
     <header className="bg-zinc-900 w-full">
      <h1 className="text-white py-6 text-center text-5xl font-bold">
        <Link to="/">EstoqueZen</Link>
      </h1>
    </header> 
  
  )
}
export default Header
