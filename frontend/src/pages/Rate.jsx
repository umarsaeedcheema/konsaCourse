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

        <h1>Search Instructor</h1>
        <SearchBar placeholder={"Instructor"} />
        <h1>Search Course Code</h1>
        <SearchBar placeholder={'Search Course Code'} />
      


      </Grid>




    </div>
  )
}

export default Rate