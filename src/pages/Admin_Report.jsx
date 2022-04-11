import React from 'react'
import ReportCard from '../components/ReportCard.jsx'
import { Divider, Grid } from '@mui/material';
import Header from '../components/Header.jsx';



const Admin_Report = () => {
  
  const reviews = [["Sociology", "SOC 100", "Usama Hameed", "This was a bad course"],                 
  ["Computer Science", "CS 100", "Umar Cheema", "I loved this course it was amazing"],
  ["Artificial Intelligence", "CS 300", "Saifullah Khan", "Ye kya ajeeb course tha kuch samajh nahin aya"],
  ["Software Engineering", "CS 412", "Mustafa Arshad", "Kamal course 10/10 would take again"]];

  const tags = ["test1", "test2", "test3", "test4"];


  const arrlen = reviews.length;
  
  
  return (
    <>
        <p>{arrlen}</p>
        <Grid container direction={'column'} spacing = {4}>
            
          {/* <Grid item container>   */}
            
            

            {reviews.map((value,key) => {

              return (
                <>
                <Grid item container>  
                  <Grid item xs={0} sm={2} />
                  <Grid item xs={12} sm={8}>

                    <ReportCard 
                      coursename = {value[0]}
                      coursecode = {value[1]}
                      username = {value[2]}
                      description = {value[3]}
                    />

                  </Grid>
                  <Grid item xs={0} sm={2} />

                </Grid>
                </>
              )

            })}

            

          {/* </Grid> */}
            
        </Grid>

        
    </>
  )
}

export default Admin_Report