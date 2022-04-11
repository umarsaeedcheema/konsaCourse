import React from 'react'
import ReportCard from '../components/ReportCard.jsx'


const Admin_Report = () => {
  
  const reviews = [["Sociology", "SOC 100", "Usama Hameed", "This was a bad course"]];
  
  
  return (
    <>
        

        <ReportCard
          coursename = {reviews[0][0]}
          coursecode = {reviews[0][1]}
          username = {reviews[0][2]}
          description = {reviews[0][3]}
             
        />
    </>
  )
}

export default Admin_Report