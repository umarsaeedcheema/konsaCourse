import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";

const axios = require('axios');


function CourseBar(props) {

  //const { state } = useLocation();
  const [data,setData] = useState(null);

  
  // const getData = async()=>{
  //   //e.preventDefault();
  //   try{
  //     const temp = await axios.get(`/instructor/allNames`);
  //     const names = temp.data;
  //     console.log("1", names);
  //     setData(names);
      
  //     console.log("2", temp);
  //     console.log("3", data);
  //   } catch (error) {
  //     console.log(error.message);
  //     console.log("Again");
  //   }
  // }

  useEffect( () => {
    
    async function getData()  {
      //e.preventDefault();
      try{
        const temp = await axios.get(`/course/uniqueCourses/%20`);
        const names = temp.data;
        console.log("1", names);
        setData(names);
        
        console.log("2", temp);
      } catch (error) {
        console.log(error.message);
        console.log("Again");
      }
    }

    getData(); 
      
  }, []);

  console.log("Data", data);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const typ = "Search Course";


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const nav = useNavigate();

  return (
    <div className="search">
      <div className="searchInputs">
        <input style={{height:"50%",backgroundColor:"#3aafa020",paddingLeft:8, borderRadius:15}}
          type="search"
          placeholder= {typ}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon  style={{height:"45%"}}/>
          ) : (
            <CloseIcon id="clearBtn" onClick={(event)=>{
                clearInput();
                props.updateValue("");
            }} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              // <div onClink={()=>{
              //   const nav = useNavigate()
              //   nav('/pages/professorscreen')
              // }} >{value.name} </div>
              // <a className="dataItem" href={value.link} target="_blank">
                <div onClick={(event)=>{

                    props.updateValue(value);
                    clearInput();
                    setWordEntered(value);
                  
                }}>{value} </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CourseBar;