import React from 'react'
import NavbarComponent from '../components/NavbarComponent';
import SearchBar from '../components/SearchBar';
import Data from '../Data.json'
// import bgImage from '../assets/Design.png'
// import styles from './styles.module.css'
const Landing = () => {
  return (
    <div
    // style={{
    //   position:'relative'
    // }}
    >

      <div>
        <NavbarComponent

          isLoggedIn={false}
          isAdmin={false} />
      </div>
      <div className='d-flex align-items-center justify-content-start ml-20 ' style={{ width: '50%', height: "100%" }} >
        <div style={{ position: 'relative', width: "60%", top: -390 }}>
          <h1>Let's find the perfect <br />course for you !</h1>
          <form >
            <div class="container">
              <div class="d-flex ">
                <div class="col-8" style={{ marginTop: "-20%" }}>
                  <SearchBar placeholder={"Search Course"} data={Data} />
                  <span style={{ color: '#3AAFA0', cursor: 'pointer' }}

                  > Search Instructor Instead</span>
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