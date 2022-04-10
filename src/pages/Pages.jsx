import React from 'react'
import Comapre from './Compare'
import Course from './Course'
import Instructor from './Instructor'
import Login from './Login'
import Rate from './Rate'
import Search from './Search'
import Landing from './Landing'
import Admin_Report from './Admin_Report'
import Navbar1 from '../Navbar1'
import Signup from './Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin_Requests from './Admin_Requests'
import ErrorPage from './ErrorPage'
import ForgotPassword from './ForgotPassword'

const Pages = () => {
  return (
    <Router>
        <Navbar1/>
        <Routes >
            <Route path='/pages/compare' element={<Comapre/>} />
            <Route path ='/pages/course' element={<Course/>}/>
            <Route path ='/pages/instructor' element={<Instructor/>}/>
            <Route path ='/pages/login' element={<Login/>}/>
            <Route path ='/pages/rate' element={<Rate/>}/>
            <Route path ='/pages/search' element={<Search/>}/>
            <Route path ='/pages/landing' element={<Landing/>}/>
            <Route path ='/pages/admin_report' element={<Admin_Report/>}/>
            <Route path ='/pages/admin_requests' element={<Admin_Requests/>}/>
            <Route path='/pages/signup'element={<Signup/>}></Route>
            <Route path='/pages/errorpagge' element={<ErrorPage/>}></Route>
            <Route path ='pages/forgotpassword' element={<ForgotPassword/>}/>



        </Routes>
    </Router>
  )
}

export default Pages