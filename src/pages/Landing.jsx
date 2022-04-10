import React from 'react'
import Button from 'react-bootstrap/Button';
import NavbarComponent from '../components/NavbarComponentGuest';

const Landing = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className='d-flex align-items-center justify-content-start ml-20 ' style={{ width: '50%', height: "100%" }} >
        <div style={{ width: "50%", height: "20%" }}>
          <h2>Let's find the perfect <br />course for you !</h2>
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

    </div>
  )
}

export default Landing