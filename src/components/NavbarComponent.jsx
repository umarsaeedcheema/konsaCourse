import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../pages/styles.module.css'
import BasicMenu from './BasicMenu'

const NavbarComponent = (props) => {

    const navigate = useNavigate()
    return (
        <div className={styles.gradient}>
            <div className='d-flex justify-content-center flex-1 ' style={{ backgroundColor: "#00ffff00" }} >   </div>
            <div className='d-flex  justify-content-center ' style={{ flex: "9", backgroundColor: "#00ffff00" }}></div>
            <div style={{ height: '100vh' }}>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid" style={{ backgroundColor: "#00FF0000" }}>
                        <div className="row justify-content-start pl-20">
                            <a class="navbar-brand" href="./landing"
                                style={{ color: 'white' }}
                            >KONSACOURSE</a>
                        </div>
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <div class="collapse navbar-collapse justify-content-center ">
                            <div class="navbar-nav" >
                                <u><a class="nav-link active mr-5" aria-current="page" href="./landing" style={{ color: "#000000" }}>Home</a></u>
                                <a class="nav-link mr-5" href="./search" style={{ color: "#000000" }} >Search</a>
                                {!props.isAdmin && <a class="nav-link mr-5" href="./rate" style={{ color: "#000000" }}>Rate</a>}
                                {!props.isAdmin && <a class="nav-link mr-5" href="./compare" style={{ color: "#000000" }}>Compare</a>}
                                {props.isAdmin && <a class="nav-link mr-5" href="./rate" style={{ color: "#000000" }}>Requests</a>}
                                {props.isAdmin && <a class="nav-link mr-5" href="./rate" style={{ color: "#000000" }}>Reports</a>}
                            </div>
                        </div>
                        <GetButtons isLoggedIn={props.isLoggedIn} />
                    </div>
                </nav>
            </div>
        </div>
    )
}

const GetButtons = (props) => {
    const navigate = useNavigate()
    if (props.isLoggedIn === false) {
        return (
            <div className="justify-content-end mr-20">
                <button className="btn btn-success mr-5 rounded-pill"
                    onClick={() => {
                        navigate('/pages/login')
                    }}
                    > SignIn
                    {console.log(props.isLoggedIn)}
                </button>
                <button className="btn btn-dark rounded-pill"
                    onClick={() => {
                        navigate('/pages/signup')
                    }}
                > SignUp </button>
            </div>
        )
    }
    else {
        return (
            <>
                <BasicMenu />
                {console.log(props.isLoggedIn)}
            </>
        )}
}

export default NavbarComponent