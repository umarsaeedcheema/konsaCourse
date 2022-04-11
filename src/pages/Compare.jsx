import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SearchBar from '../components/SearchBar'
import Data from '../Data.json'
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
    <>

      <NavbarComponent
        isLoggedIn={false}
        isAdmin={false}
      ></NavbarComponent>
      <div
        style={{ position: 'relative', marginTop: '-50%', marginLeft: '37%' }}
      >
        <div className="searchInputs">
          <input style={{ height: "50%" }}
            type="text"
            placeholder='Choose Course'
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {data.course.length === 0 ? (
              <SearchIcon style={{ height: "45%" }} />
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

    </>
  )
}

export default Compare