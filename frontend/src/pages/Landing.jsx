import React from 'react'
import Button from 'react-bootstrap/Button';
import NavbarComponent from '../components/NavbarComponentGuest';
import SearchBar from '../components/SearchBar';
import Data from '../../src/Data.json'


const Landing = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className=' ml-20'
        style={{ position: 'relative', marginTop:'-35%' }}
      >
        <div >
          <h1>Let's find the perfect <br />course for you !</h1>
          <form style={{ position: 'relative', marginTop: '-5%', marginLeft:'-5%' }}>
            <div class="container">
              <div class="d-flex ">
                <div class="col-8">
                  <SearchBar placeholder={"Search Course"} data={Data}
                  />
                  {/* <div class="search"> <i class="bi bi-search"></i> <button class="btn">Search</button> </div> */}
                </div>
              </div>
            </div>
          </form>

          <span className="d-flex justify-content-start"
            style={{ marginleft: "5%", fontSize: "15px", cursor: 'pointer',color:"#3AAFA0" }}
            >
            Search Instructor Instead
          </span>

        </div>
      </div>

    </>
  )
}

export default Landing