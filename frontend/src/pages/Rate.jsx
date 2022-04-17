import React from 'react'
import styles from './styles.module.css'
import NavbarComponent from '../components/NavbarComponent'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import SearchBar from '../components/SearchBar'


const Rate = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log("Logged in User");
    }
  }, []);

  let loggedin = false;
  let adminin = false;

  if (user) {
    if (user.isAdmin) {
      adminin = true;
    } else {
      loggedin = true;
    }
  }



  return (
    <div className={styles.gradient}>
      <NavbarComponent
        isAdmin={adminin}
        isLoggedIn={loggedin}
      />

      <Grid container
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}>

        <div
          style={{
            marginTop: '5%'
          }}
        >

          <h4
            style={{
              marginLeft: '5%'
            }}
          >Search Instructor</h4>
          <SearchBar placeholder={"Instructor"} />
          <h4
            style={{
              marginLeft: '5%'
            }}

          >Search Course Code</h4>
          <SearchBar placeholder={'Search Course Code'} />
          <h4
            style={{
              marginLeft: '5%'
            }}
          >Search Course Name</h4>
          <SearchBar placeholder={'Search Course Name'} />
        </div>

        <div
        style={{
          marginLeft:'-8%'
        }}
        >
            <h4>Rate Professor</h4>
            {/* insert stars component */}
            

        </div>
      </Grid>




    </div>
  )
}

export default Rate