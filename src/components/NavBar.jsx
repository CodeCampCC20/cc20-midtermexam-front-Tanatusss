import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <nav className='h-13 bg-gray-700 flex items-center gap-8'>
      <NavLink className={"cursor-pointer hover:underline mx-2"} to={'/'}>Login</NavLink>
      <NavLink className={"cursor-pointer hover:underline mx-2"} to={'/todo'}>Todolist</NavLink>
      <NavLink className={"cursor-pointer hover:underline mx-2"} to={'/register'}>Register</NavLink>
    </nav>
  )
}

export default NavBar