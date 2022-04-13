import React from 'react'
import ReportCard from '../components/ReportCard.jsx'
import { Divider, Grid } from '@mui/material';
import Header from '../components/Header.jsx';
import NavbarComponent from '../components/NavbarComponent.jsx';



const Admin_Report = () => {

  const reviews = [["Sociology", "SOC 100", "Usama Hameed", "This was a bad course"],
  ["Computer Science", "CS 100", "Umar Cheema", "I loved this course it was amazing"],
  ["Artificial Intelligence", "CS 300", "Saifullah Khan", "Ye kya ajeeb course tha kuch samajh nahin aya"],
  ["Software Engineering", "CS 412", "Mustafa Arshad", "Kamal course 10/10 would take again"]];




  return (
    <>
      <div
        style={{
          position: 'relative'
        }}
      >
        <NavbarComponent />
      </div>
      <div
        style={{
          position: 'relative',
          top: -500
        }}
      >

        <h1
          style={{
            position: 'relative',
            left: 550,
            top: -50
          }}
        >
          Reported Ratings
        </h1>


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

    </>
  )
}

export default Admin_Report