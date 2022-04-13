import React from 'react'
import NavbarComponent from '../components/NavbarComponent';
import SearchBar from '../components/SearchBar';
import Data from '../Data.json'
// import bgImage from '../assets/Design.png'
import styles from './styles.module.css'
const Landing = () => {
  return (
<<<<<<< HEAD:src/pages/Landing.jsx
    <div className={styles.gradient} style={{flex:"column"}}>

      <NavbarComponent
      isLoggedIn={false}
      isAdmin={false} style={{backgroundColor:"#00ff0000",flex:1}} />

      <div className='d-flex flex-column align-items-start justify-content-center mt-30 ml-20 ' style={{ width: '50%',flex:9 }} >
        <div style={{ position:'relative', width: "60%" }}>
=======
    <div
    style={{
      position:'relative'
    }}
    >

      <div>
        <NavbarComponent

          isLoggedIn={false}
          isAdmin={false} />
      </div>
      <div className='d-flex align-items-center justify-content-start ml-20 ' style={{ width: '50%', height: "100%" }} >
        <div style={{ position: 'relative', width: "60%", top: -390 }}>
>>>>>>> c862216bf468962ee8bf5d87b2c149cb2d7a2ba8:frontend/src/pages/Landing.jsx
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