import React from 'react'
import NavbarComponent from '../components/NavbarComponent';
import SearchBar from '../components/SearchBar';
import Data from '../Data.json'
// import bgImage from '../assets/Design.png'
import styles from './styles.module.css'
const Landing = () => {
  return (
    <div className={styles.gradient} style={{flex:"column"}}>

      <NavbarComponent
      isLoggedIn={false}
      isAdmin={false} style={{backgroundColor:"#00ff0000",flex:1}} />

      <div className='d-flex flex-column align-items-start justify-content-center mt-30 ml-20 ' style={{ width: '50%',flex:9 }} >
        <div style={{ position:'relative', width: "60%" }}>
          <h1>Let's find the perfect <br />course for you !</h1>
          <form >
            <div class="container">
              <div class="d-flex ">
                <div class="col-8" style={{ marginTop:"-20%"}}>
                <SearchBar placeholder={"Search Course"} data={Data} />
                <span style={{color:'#3AAFA0',cursor:'pointer'}} 
               
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