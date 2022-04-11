import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../pages/styles.module.css'


const NavbarComponentGuest = () => {

    let navigate = useNavigate()
    return (
        <div className={styles.gradient}>
            <div className='d-flex justify-content-center flex-1 ' style={{ backgroundColor: "#00ffff00" }} >   </div>
            <div className='d-flex  justify-content-center ' style={{ flex: "9", backgroundColor: "#00ffff00" }}></div>
            <div>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid" style={{ backgroundColor: "#00FF0000" }}>
                        <div className="row justify-content-start pl-20">
                            <a class="navbar-brand" href="./Landing"
                                style={{ color: 'white' }}
                            >KONSACOURSE</a>
                        </div>
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <div class="collapse navbar-collapse justify-content-center ">
                            <div class="navbar-nav" >
                                <u><a class="nav-link active mr-5" aria-current="page" href="./Landing" style={{ color: "#000000" }}>Home</a></u>
                                <a class="nav-link mr-5" href="./Search" style={{ color: "#000000" }} >Search</a>
                                <a class="nav-link mr-5" href="./Rate" style={{ color: "#000000" }}>Rate</a>
                                <a class="nav-link mr-5" href="./Compare" style={{ color: "#000000" }}>Compare</a>
                            </div>
                        </div>
                        <div className="justify-content-end pr-20">
                            <button className="btn btn-success mr-5 rounded-pill"
                                onClick={() => {
                                    navigate('/pages/login')
                                }}
                            > SignIn </button>
                            <button className="btn btn-dark rounded-pill"
                                style={{ colorBackground: '#3AAFA0' }}
                                onClick={() => {
                                    navigate('/pages/signup')
                                }}
                            > SignUp </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavbarComponentGuest