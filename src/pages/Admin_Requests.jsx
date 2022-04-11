import React from 'react'
import RequestCard from '../components/RequestCard.jsx';
import { Divider, Grid } from '@mui/material';
import Header from '../components/Header.jsx';



const Admin_Requests = () => {
  
  const reviews = [["Sociology", "SOC 100", "Usama Hameed"],                 
  ["Computer Science", "CS 100", "Umar Cheema"],
  ["Artificial Intelligence", "CS 300", "Saifullah Khan"],
  ["Software Engineering", "CS 412", "Mustafa Arshad"]];


  
  
  return (
    <>
        <Grid container direction={'column'} spacing = {4}>
            
          {/* <Grid item container>   */}
            
            

            {reviews.map((value,key) => {

              return (
                <>
                <Grid item container>  
                  <Grid item xs={0} sm={2} />
                  <Grid item xs={12} sm={8}>

                    <RequestCard 
                      coursename = {value[0]}
                      coursecode = {value[1]}
                      profname = {value[2]}
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

export default Admin_Requests