import React from 'react'
import styles from './styles.module.css'
import NavbarComponent from '../components/NavbarComponent'
const Rate = () => {
  return (
    <div className={styles.gradient}>
        <NavbarComponent
                isAdmin={false}
                isLoggedIn={true}
                style={{flex:1}}
    ></NavbarComponent>
    </div>
  )
}

export default Rate