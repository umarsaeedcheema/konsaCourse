import React from 'react'
import RequestCard from '../components/RequestCard.jsx';
import { Grid } from '@mui/material';
import { useEffect,useState } from 'react';
import styles from './styles.module.css'


import NavbarComponent from '../components/NavbarComponent.jsx';


const AdminRequests = () => {
  
  const [loggedin, setLoggedin] = useState(false);
    const [adminin, setAdminin] = useState(false);
  const reviews = [["Sociology", "SOC 100", "Usama Hameed"],
  ["Computer Science", "CS 100", "Umar Cheema"],
  ["Artificial Intelligence", "CS 300", "Saifullah Khan"],
  ["Software Engineering", "CS 412", "Mustafa Arshad"]];

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      if (foundUser.isAdmin) {
        setAdminin(true)
      }
      if (localStorage.getItem("user")) {
        setLoggedin(true)
      }
      console.log("Logged in User");
    }
  }, []);




  return (
    <div 
    className={styles.gradient}
    style={{
      width: 'auto'
    }} >
      <div style={{
        height: 100,
      }}>
        <NavbarComponent
          isLoggedIn={loggedin}
          isAdmin={adminin}
        />
      </div>

      <h1
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Requests
      </h1>


      <div
        style={{
          marginTop: '50px'
        }}
      >
        <Grid container direction={'column'} spacing={4}

        >

          {/* <Grid item container>   */}



          {reviews.map((value, key) => {

            return (
              <>



                <Grid item container>
                  <Grid item xs={0} sm={2} />
                  <Grid item xs={12} sm={8}>

                    <RequestCard
                      coursename={value[0]}
                      coursecode={value[1]}
                      profname={value[2]}
                    />

                  </Grid>
                  <Grid item xs={0} sm={2} />

                </Grid>
              </>
            )

          })}



          {/* </Grid> */}

        </Grid>


      </div>
    </div>
  )
}

export default AdminRequests