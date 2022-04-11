import React from 'react'
import Button from 'react-bootstrap/Button';
import NavbarComponentGuest from '../components/NavbarComponentGuest';
import SearchBar from '../components/SearchBar';
import Data from '../../src/Data.json'


const Landing = () => {
  return (
    <>
      <NavbarComponentGuest></NavbarComponentGuest>
      
      <div>
        <div >
          <h1>Let's find the perfect <br />course for you !</h1>
          <form >
            <div class="container">
              <div class="d-flex ">
                <div class="col-8">
                <SearchBar placeholder={"abcd"} data={Data} 
                style={{backgroundColor:"#DFEFED"}}
                />
                  {/* <div class="search"> <i class="bi bi-search"></i> <button class="btn">Search</button> </div> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>    

  )
}

export default Landing