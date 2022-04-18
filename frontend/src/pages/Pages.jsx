import React from 'react'
import CompareFinal from './CompareFinal'
import Course from './Course'
import Login from './Login'
import Rate from './Rate'
import Search from './Search'
import Landing from './Landing'
import AdminReport from './AdminReport'
import Signup from './Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminRequests from './AdminRequests'
import ErrorPage from './ErrorPage'
import ForgotPassword from './ForgotPassword'
import ChangePassword from './ChangePassword'
import ProfessorScreen from './ProfessorScreen'
import NavbarComponent from '../components/NavbarComponent'
import AddInstructor from './AddInstructor'
import Comparer from './Comparer'
import Bgimage from '../components/Bgimage'

const Pages = () => {

   

  return (
    <Router>
        {/* <NavbarComponent/> */}
        <Routes >
            
            <Route path='/pages/bgImage' element={<Bgimage/>}/>
            <Route path='/pages/compare' element={<Comparer/>} />
            <Route path='/pages/comparefinal' element={<CompareFinal/>}></Route>
            <Route path ='/pages/course' element={<Course/>}/>
            <Route path ='/pages/professorscreen' element={<ProfessorScreen/>}/>
            <Route path ='/pages/login' element={<Login/>}/>
            <Route path ='/pages/rate' element={<Rate/>}/>
            <Route path ='/pages/search' element={<Search/>}/>
            <Route path ='/' element={<Landing/>}/>
            <Route path = '/pages/changepassword' element={<ChangePassword/>} />
            <Route path ='/pages/adminreport' element={<AdminReport/>}/>
            <Route path ='/pages/adminrequests' element={<AdminRequests/>}/>
            <Route path='/pages/signup'element={<Signup/>}></Route>
            <Route path='/*' element={<ErrorPage/>}></Route>
            <Route path ='pages/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/pages/landing' element={<Landing/>}></Route>
            <Route path='/pages/addinstructor' element={<AddInstructor/>}> </Route>
        </Routes>
    </Router>
  )
}

export default Pages