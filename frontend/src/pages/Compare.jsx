import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SearchBar from '../components/SearchBar'
import Data from '../Data.json'
import styles from "./styles.module.css";
import { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Input } from '@mui/material';

const Compare = () => {

  const [selected, setSelected] = useState(false)


  const [filteredcourses, setFilteredcourses] = useState([]);
  const [courseEntered, setcourseEntered] = useState("");

  const [filteredInst1, setFilteredInst1] = useState([]);
  const [instEntered1, setinstEntered1] = useState("");
  
  const [filteredInst2, setFilteredInst2] = useState([]);
  const [instEntered2, setinstEntered2] = useState("");


  const handleCourse = (ev) => {
    // setData({ ...data, [input.name]: input.value });
    setcourseEntered(ev.target.value)
    // console.log(wordEntered, 'here')
    const newFilter = [1,2,3,4,5];

    if (courseEntered === "") {
      setFilteredcourses([]);
    } else {
      setFilteredcourses(newFilter);
    }
  };
  const handleInst1 = (ev) => {
    // setData({ ...data, [input.name]: input.value });
    setinstEntered1(ev.target.value)
    // console.log(wordEntered, 'here')
    const newFilter = [1,2,3,4,5];

    if (instEntered1 === "") {
      setFilteredInst1([]);
    } else {
      setFilteredInst1(newFilter);
    }
  };
  const handleInst2 = (ev) => {
    // setData({ ...data, [input.name]: input.value });
    setinstEntered2(ev.target.value)
    // console.log(wordEntered, 'here')
    const newFilter = [1,2,3,4,5];

    if (instEntered2 === "") {
      setFilteredInst2([]);
    } else {
      setFilteredInst2(newFilter);
    }
  };
  const clearCourse = () => {
    setFilteredcourses([]);
    // setData("");
    setcourseEntered("")
    // console.log(filteredData.length)
    // console.log()
  };
  const clearInst1 = () => {
    setFilteredInst1([]);
    // setData("");
    setinstEntered1("")
    // console.log(filteredData.length)
    // console.log()
  };
  const clearInst2 = () => {
    setFilteredInst2([]);
    // setData("");
    setinstEntered2("")
    // console.log(filteredData.length)
    // console.log()
  };


  return (
    <div className={styles.gradient}>

      <NavbarComponent
        isLoggedIn={false}
        isAdmin={false}
        style={{backgroundColor:"red",flex:1,display:"flex"}}
      ></NavbarComponent>
      <div className="d-flex justify-content-center" style={{marginTop:"0%"}}>
         <div className="searchInputs" style={{backgroundColor:"#000fff00",flex:"row", justifyContent:"center",alignContent:"center"}}>
           <input style={{backgroundColor:"#3aafa020",width:"100%",paddingLeft:8,justifyContent:"center",borderRadius:"20px" }}
            type="search"
            placeholder='Choose Course'
            value={courseEntered}
            onChange={handleCourse}
          />
          <div className="searchIcon">
            {filteredcourses.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearCourse} />
            )}
          </div>
          {filteredcourses.length !== 0 && (
          <div className="dataResult" style={{}}>
            {filteredcourses.slice(0, 15).map((value) => {
              return (
                <div className="dataItem" onClick={()=>{
                  setSelected(true)
                  setFilteredcourses([])
                  // clearCourse()
                }}>
                  <p>{value.title} v </p>
                </div>
              );
            })}
          </div>
        )}
       </div>
      </div>

      {selected && <div className='row justify-content-md-center'>
      <div className="col-4"> 
      <div className="searchInputs" style={{backgroundColor:"#000fff00",flex:"row", justifyContent:"center",alignContent:"center"}}>
           <input style={{backgroundColor:"#3aafa020",width:"100%",paddingLeft:8,justifyContent:"center",borderRadius:"20px" }}
            type="search"
            placeholder='Choose Course'
            value={instEntered1}
            onChange={handleInst1}
          />
          <div className="searchIcon">
            {filteredInst1.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInst1} />
            )}
          </div>
       </div>
      </div>
      <div className="col-4">
      
      <div className="searchInputs" style={{backgroundColor:"#000fff00",flex:"row", justifyContent:"center",alignContent:"center"}}>
           <input style={{backgroundColor:"#3aafa020",width:"100%",paddingLeft:8,justifyContent:"center",borderRadius:"20px" }}
            type="search"
            placeholder='Choose Course'
            value={instEntered2}
            onChange={handleInst2}
          />
          <div className="searchIcon">
            {filteredInst1.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInst2} />
            )}
          </div>
       </div>
      </div>
      </div>}
      </div>
      
  )
}

//{ <div
      // className='d-flex flex-row justify-content-center align-content-center'
      //   style={{backgroundColor:"#000000000" }}
      // >
      //   <div className="searchInputs" style={{backgroundColor:"#000fff00",flex:"row", justifyContent:"center",alignContent:"center"}}>
      //     <input style={{backgroundColor:"#319fa020",justifyContent:"center",borderRadius:"20px" }}
      //       type="search"
      //       placeholder='  Choose Course'
      //       value={wordEntered}
      //       onChange={handleFilter}
      //     />
      //     <div className="searchIcon">
      //       {filteredData.length === 0 ? (
      //         <SearchIcon />
      //       ) : (
      //         <CloseIcon id="clearBtn" onClick={clearInput} />
      //       )}
      //     </div>
        
        // {filteredData.length !== 0 && (
        //   <div className="dataResult" style={{backgroundColor:"#319fa020"}}>
        //     {filteredData.slice(0, 15).map((value) => {
        //       return (
        //         <div className="dataItem" onClick={()=>{
        //           setSelected(true)
        //           clearInput()
        //         }}>
        //           <p>{value.title} v </p>
        //         </div>
        //       );
        //     })}
        //   </div>
        // )}
        // </div>
        // {selected && <div className="d-flex align-content-center justify-content-center">
        // <div className="searchInputs" style={{backgroundColor:"#000fff00", justifyContent:"center",alignContent:"center"}}>
        //   <input style={{backgroundColor:"#319fa020",justifyContent:"center",borderRadius:"20px" }}
        //     type="search"
        //     placeholder='  Choose First Instructor '
        //     value={wordEntered}
        //     onChange={handleFilter}
        //   />
        //   <div className="searchIcon">
        //     {filteredData.length === 0 ? (
        //       <SearchIcon />
        //     ) : (
        //       <CloseIcon id="clearBtn" onClick={clearInput} />
        //     )}
        //   </div>
        // </div>
        // {filteredData.length !== 0 && (
        //   <div className="dataResult" style={{}}>
        //     {filteredData.slice(0, 15).map((value) => {
        //       return (
        //         <div className="dataItem" onClick={()=>{
        //           setSelected(true)
        //           clearInput()
        //         }}>
        //           <p>{value.title} v </p>
        //         </div>
        //       );
        //     })}
        //   </div>
        // )}
      //    <div className="searchInputs" style={{backgroundColor:"#000fff00", justifyContent:"center",alignContent:"center"}}>
      //     <input style={{backgroundColor:"#319fa020",justifyContent:"center",borderRadius:"20px"}}
      //       type="search"
      //       placeholder='  Choose Second Instructor'
      //       value={wordEntered}
      //       onChange={handleFilter}
      //     />
      //     <div className="searchIcon">
      //       {filteredData.length === 0 ? (
      //         <SearchIcon />
      //       ) : (
      //         <CloseIcon id="clearBtn" onClick={clearInput} />
      //       )}
      //     </div>
      //   </div>
      //   {filteredData.length !== 0 && (
      //     <div className="dataResult" style={{}}>
      //       {filteredData.slice(0, 15).map((value) => {
      //         return (
      //           <div className="dataItem" onClick={()=>{
      //             setSelected(true)
      //             clearInput()
      //           }}>
      //             <p>{value.title} v </p>
      //           </div>
      //         );
      //       })}
      //     </div>
      //   )}
          
      //      </div>}

      // </div> */}



export default Compare