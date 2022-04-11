import React from 'react'
import Button from 'react-bootstrap/Button';
import NavbarComponentGuest from '../components/NavbarComponentGuest';
<<<<<<< HEAD
import SearchBar from '../components/SearchBar';
import Data from '../../src/Data.json'


const Landing = () => {
  return (
    <>
      <NavbarComponentGuest></NavbarComponentGuest>
      
      <div>
        <div >
          <h1>Let's find the perfect <br />course for you !</h1>
=======

const Landing = () => {
  return (
    <div>
      <NavbarComponentGuest></NavbarComponentGuest>
      <div className='d-flex align-items-center justify-content-start ml-20 ' style={{ width: '50%', height: "100%" }} >
        <div style={{ width: "50%", height: "20%" }}>
          <h2>Let's find the perfect <br />course for you !</h2>
>>>>>>> 99667a1232dba0abfb20f8aeba5d32f8e96e3454
          <form >
            <div class="container">
              <div class="d-flex ">
                <div class="col-8">
                  <div class="search"> <i class="bi bi-search"></i> <button class="btn">Search</button> </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
<<<<<<< HEAD

    </>    

=======
    </div>
>>>>>>> 99667a1232dba0abfb20f8aeba5d32f8e96e3454
  )
}

export default Landing