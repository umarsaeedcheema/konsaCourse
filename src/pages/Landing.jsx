import React from 'react'
import Button from 'react-bootstrap/Button';
import NavbarComponentGuest from '../components/NavbarComponentGuest';
import SearchBar from '../components/SearchBar';
import Data from '../Data.json'
import bgImage from '../assets/Design.png'

const Landing = () => {
  return (
    <div>
      <div
      style={{backgroundImage: `url(${bgImage})`
    }}
      >

      </div>
      <NavbarComponentGuest></NavbarComponentGuest>
      <div className='d-flex align-items-center justify-content-start ml-20 ' style={{ width: '50%', height: "100%" }} >
        <div style={{ position:'relative', width: "60%", marginTop: "-90%" }}>
          <h1>Let's find the perfect <br />course for you !</h1>
          <form >
            <div class="container">
              <div class="d-flex ">
                <div class="col-8" style={{postition:'relative', marginTop:"-20%"}}>
                <SearchBar placeholder={"Search Course"} data={Data} />
                <span style={{color:'#3AAFA0'}}  > Search Instructor Instead</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Landing