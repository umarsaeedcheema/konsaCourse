import React from 'react'
import Compare from './Compare'
import CompareFinal from './CompareFinal'
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
import Homepage from './Homepage'
import ChangePassword from './ChangePassword'
import ProfessorScreen from './ProfessorScreen'
import NavbarComponent from '../components/NavbarComponent'

const Pages = () => {
  return (
    <Router>
        {/* <NavbarComponent/> */}
        <Routes >
            <Route path='/pages/compare' element={<Compare/>} />
            <Route path='/pages/comparefinal' element={<CompareFinal/>}></Route>
            <Route path ='/pages/course' element={<Course/>}/>
            <Route path ='/pages/instructor' element={<ProfessorScreen/>}/>
            <Route path ='/pages/login' element={<Login/>}/>
            <Route path ='/pages/rate' element={<Rate/>}/>
            <Route path ='/pages/search' element={<Search/>}/>
            <Route path ='/pages/landing' element={<Landing/>}/>
            <Route path = '/pages/changepassword' element={<ChangePassword/>} />
            <Route path ='/pages/admin_report' element={<Admin_Report/>}/>
            <Route path ='/pages/admin_requests' element={<Admin_Requests/>}/>
            <Route path='/pages/signup'element={<Signup/>}></Route>
            <Route path='/*' element={<ErrorPage/>}></Route>
            <Route path ='pages/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/pages/homepage' element={<Homepage/>}></Route>
        </Routes>
    </Router>
  )
}

export default Pages