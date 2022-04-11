import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SearchBar from '../components/SearchBar'
import Data from '../Data.json'
import { useState } from 'react'






const Compare = () => {
  const [data,setData]=useState({'course':'',
  'instructor1':'',
  'instructor2':''
}) 

  return (
    <>
      <NavbarComponent
        isLoggedIn={false}
        isAdmin={false}
      ></NavbarComponent>
      <div
        style={{ position: 'relative', marginTop: '-50%', marginLeft: '37%' }}
      >
        <SearchBar
          placeholder={"Choose Course"} data={Data} />
        
      </div>
    </>
  )
}

export default Compare