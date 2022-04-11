import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <>
       <h1> Hello</h1>
    <nav>
        <ul className='nav-links'>
            <Link to='/pages/compare'>
            <li>Compare</li>
            </Link>
            <Link to='/pages/course'>
            <li>Course</li>
            </Link>
            <Link to={'./pages/instructor'}>
            <li>Instructor</li>
            </Link>
            <Link to ={'./pages/landing'} >
            <li>Landing </li>
            </Link>
            <Link to ={'./pages/login'} >
            <li>Login</li>
            </Link>
            <Link to ={'./pages/rate'} >
            <li>Rate </li>
            </Link>
            <Link to ={'./pages/search'} >
            <li>Search </li>
            </Link>
            <Link to ={'./'} >
            <li>Home</li>
            </Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar1