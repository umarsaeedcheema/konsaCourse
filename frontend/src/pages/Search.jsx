import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SearchBar from '../components/SearchBar'
import Data from '../Data.json'
import styles from './styles.module.css';

const Search = () => {
  const url = 'alsk'
  return (
    <div className={styles.gradient}>
      <NavbarComponent 
       isAdmin={false}
       isLoggedIn={true}
      style={{backgroundColor:"#000fff00",flex:1}}
      ></NavbarComponent>
      <div className='align-content-center justify-content-center' style={{ width: '100%',flex:9 }} >
        <div style={{ width: "80%"}}>
          <form>
            <div class="container">
              <div class="d-flex align-content-center justify-content-center">
                <div class="col-8">
                  <SearchBar placeholder={"Instructor"} url={url} style={{backgroundColor:"#3aafa020"}} />
                  <span style={{ color: '#3AAFA0', cursor: 'pointer' }}

                  > Search Course Instead</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search

