import React, {useState, useEffect} from 'react'
import ReportCard from '../components/ReportCard.jsx'
import { Grid } from '@mui/material';
import NavbarComponent from '../components/NavbarComponent.jsx';
import styles from './styles.module.css'
const axios = require('axios');



const AdminReport = () => {


  const reviews = [["Sociology", "SOC 100", "Usama Hameed", "This was a bad course"],
  ["Computer Science", "CS 100", "Umar Cheema", "I loved this course it was amazing"],
  ["Artificial Intelligence", "CS 300", "Saifullah Khan", "Ye kya ajeeb course tha kuch samajh nahin aya"],
  ["Software Engineering", "CS 412", "Mustafa Arshad", "Kamal course 10/10 would take again"]];
  const [loggedin, setLoggedin] = useState(false);
  const [adminin, setAdminin] = useState(false);

  const [data, setData] = useState([null, false])


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      if (foundUser.isAdmin) {
        setAdminin(true)
      } 
      if (localStorage.getItem("user")){
        setLoggedin(true)
      }
      console.log("Logged in User");
    }
  }, []);


  const getData = async () => {
    await axios.get('/admin/reports').then( (temp)=>{
        
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
    {data[1] && <div style={{
      width: 'auto'
    }}
      className={styles.gradient}
    >
      <div style={{
        height: 100,
      }}>
        <NavbarComponent 
          isAdmin={adminin}
          isLoggedIn={loggedin}
        />
      </div>

      <h1
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Reports
      </h1>
      <div
        style={{
          marginTop: '50px'
        }}
      >


        <Grid container direction={'column'} spacing={4}>

          {/* <Grid item container>   */}



          {reviews.map((value, key) => {

            return (
              <>
                <Grid item container>
                  <Grid item xs={0} sm={2} />
                  <Grid item xs={12} sm={8}>

                    <ReportCard
                      coursename={value[0]}
                      coursecode={value[1]}
                      username={value[2]}
                      description={value[3]}
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

export default AdminReport