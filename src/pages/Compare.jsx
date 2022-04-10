import React from 'react'
import SearchBar from '../components/SearchBar'
import Data from '/Users/umar/Desktop/konsa/konsaCourse/src/Data.json'
// ,backgroundImage:"linearGradient(red,white)"
// import './Gradd.css'
// style={{flex:"1"}}
const Compare = () => {
  return (
    <div className="Gradd">
     {/* <div className='d-flex bg-dark' style={{height:"100vh",flexDirection:"column"}}> */}
      {/* <div className="Gradd" >Navbarr</div> */}
      <div className='d-flex justify-content-center flex-1 ' style={{backgroundColor:"#00ffff00"}} > Navbarrr  </div>
      <div className='d-flex  justify-content-center ' style={{flex:"9",backgroundColor:"#00ffff00"}}>
      <SearchBar placeholder={"abcd"} data={Data} />
      </div>
    </div>
  )
}

export default Compare