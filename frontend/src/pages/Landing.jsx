import React from 'react'
import NavbarComponent from '../components/NavbarComponent';
import SearchBar from '../components/SearchBar';
import Data from '../Data.json'
// import bgImage from '../assets/Design.png'
import styles from './styles.module.css'
import { useState, useEffect } from "react";

const Landing = () => {
  
  const [user, setUser] = useState();
  const [admin, setAdmin] = useState();

  

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedInAdmin = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log("Logged in User");
    } else if (loggedInAdmin) {
      const foundAdmin = JSON.parse(loggedInAdmin);
      setAdmin(foundAdmin);
    }
  }, []);

  let loggedin = false;
  let adminin = false;
  
  if (user) {
    loggedin = true;
  }
  
  if (admin) {
    adminin = true;
  }
  
  
  
  
  return (
    <div className={styles.gradient}
    // style={{
    //   position:'relative'
    //   // backgroundColor:"#000fff00"
    // }}
    >

      <div>
        <NavbarComponent
          // style={{backgroundColor:"#000fff00",flex:1}}
          isLoggedIn={loggedin}
          isAdmin={adminin} />
      </div>
      <div className=' align-items-center justify-content-start ml-20 pt-40' style={{ width: '50%', height: "100%" }} >
        <div style={{ width: "80%" }}>
          <h1>Let's find the perfect <br />course for you!</h1>
          <form
            style={{
              display: 'block',
              marginTop: '-60px'
            }}
          >
            <div class="container">
              <div class="d-flex ">
                <div class="col-8">
                  <SearchBar placeholder={"Search Course"} data={Data} style={{ backgroundColor: "#3aafa020" }} />
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