import React from 'react'
import RequestCard from '../components/RequestCard.jsx';
import { Grid } from '@mui/material';
import { useEffect,useState } from 'react';
import styles from './styles.module.css'
import NavbarComponent from '../components/NavbarComponent.jsx';

const axios = require('axios');



const AdminRequests = () => {
  
  const [loggedin, setLoggedin] = useState(false);
  const [adminin, setAdminin] = useState(false);
  const reviews = [["Sociology", "SOC 100", "Usama Hameed"],
  ["Computer Science", "CS 100", "Umar Cheema"],
  ["Artificial Intelligence", "CS 300", "Saifullah Khan"],
  ["Software Engineering", "CS 412", "Mustafa Arshad"]];

  const [data, setData] = useState([null, false])

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

  
  const getData = async () => {
    await axios.get('/admin/getRequests').then( (temp)=>{
        
        setData([temp, true]);

         

    }).catch((error)=> {
        console.log("ERROR 2", error)
    })
}

useEffect(()=>{
    getData();
},[])






  return (
    <>
    {data[1] && <div 
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


          {console.log(data)}
          {data[0].data.map((value, key) => {

            return (
              <>



                <Grid item container>
                  <Grid item xs={0} sm={2} />
                  <Grid item xs={12} sm={8}>

                    <RequestCard
                      coursename={value.courseName}
                      coursecode={value.courseCode}
                      profname={value.fullName}
                      department={value.department}
                      id={value._id}
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
    </div>}
    </>
  )
}

export default AdminRequests