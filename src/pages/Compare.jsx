import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SearchBar from '../components/SearchBar'
import Data from '../Data.json'
import styles from "./styles.module.css";
import { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Compare = () => {
  const [data, setData] = useState({
    'course': '',
    'instructor1': '',
    'instructor2': ''
  })

  const [selected, setSelected] = useState(false)


  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (ev) => {
    // setData({ ...data, [input.name]: input.value });
    setWordEntered(ev.target.value)
    console.log(wordEntered, 'here')
    const newFilter = [1,2,3,4,5];

    if (data.searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setData("");
  };


  return (
    <div className={styles.gradient}>

      <NavbarComponent
        isLoggedIn={false}
        isAdmin={false}
        style={{backgroundColor:"#00000000",flex:1}}
      ></NavbarComponent>
      <div
      className='d-flex flex-column flex-9 justify-content-center align-content-center'
        style={{backgroundColor:"#000000000" }}
      >
        <div className="searchInputs" style={{backgroundColor:"#000fff00", justifyContent:"center",alignContent:"center"}}>
          <input style={{backgroundColor:"#ff000000",justifyContent:"center" }}
            type="text"
            placeholder='Choose Course'
            value={wordEntered}
            
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value) => {
              return (
                <div className="dataItem" onClick={()=>{
                  setSelected(true)
                }}>
                  <p>{value.title} v </p>
                </div>
              );
            })}
          </div>
        )}

      </div>

    </div>
  )
}

export default Compare