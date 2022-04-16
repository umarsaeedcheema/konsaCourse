import React from 'react'
import styles from './styles.module.css'
import NavbarComponent from '../components/NavbarComponent'
import {useState,useEffect } from 'react'


const Rate = () => {
  
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log("Logged in User");
    }
  }, []);

  let loggedin = false;
  let adminin = false;
  
  if (user) {
    if (user.isAdmin) {
      adminin = true;
    } else {
      loggedin = true;
    }
  }
  
  
  
  return (
    <div className={styles.gradient}>
        <NavbarComponent
                isAdmin={adminin}
                isLoggedIn={loggedin}
            />


    <div className="d-flex border-radius-10 flex-cloumn" style={{ height:"90vh",backgroundColor:"#319fa020"}}>
    OOLALALALAL

    </div>

    </div>
  )
}

export default Rate