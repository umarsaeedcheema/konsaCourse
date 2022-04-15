import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const axios = require('axios')


function SearchBar({ placeholder, url }) {
  const [data,setData] = useState([])
  
  const getData = async()=>{
    const temp = await axios.get(url)
    if(temp.length !==0)
    {
      setData(temp)
    }
  }

  useEffect( () => {
    getData()
      
  },[])
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const typ = "Search "+placeholder
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
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
  const nav = useNavigate()

  return (
    <div className="search">
      <div className="searchInputs">
        <input style={{height:"50%",backgroundColor:"#3aafa020",paddingLeft:8, borderRadius:15}}
          type="text"
          placeholder= {typ}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon  style={{height:"45%"}}/>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
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
                <div onClick={()=>{
                  if(placeholder==='Course')
                  {nav('/pages/Course',value)}
                  else
                  {
                    nav('/pages/professorscreen',value)
                  }
                }}>{value.title} </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;