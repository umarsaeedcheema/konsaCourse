import React from 'react'
import Landing from './pages/Landing';
import { useState, useEffect } from "react";
import Pages from './pages/Pages';
import AddInstructor from './pages/AddInstructor';
import ReactDOM from 'react-dom'


// import Compare from './pages/Compare';
function App() {
  
  useEffect(() => {
    document.title = "KonsaCourse"
  }, [])


  return (
    <>
      {/* <AddInstructor/> */}
      <Pages></Pages>
    </>
    
  );
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  


export default App
