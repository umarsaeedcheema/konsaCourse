import React from 'react'
import { useNavigate } from 'react-router-dom';
import BasicMenu from './BasicMenu'
// import styles from '../pages/styles.module.css'
import { Button } from '@mui/material';


// <div className={styles.gradient}>
// {/* <div className='d-flex justify-content-center flex-1 ' style={{ backgroundColor: "#00ffff00" }} >  </div> */}
// {/* <div className='d-flex  justify-content-center ' style={{ flex: "9", backgroundColor: "#00ffff00" }}></div> */}

const NavbarComponent = (props) => {
    const navigate = useNavigate()

    
    return (

            <div >
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid" style={{ backgroundColor: "#00FF0000" }}>
                        <div className="d-flex flex-row justify-content-start pl-20"
                        onClick={()=>{
                            navigate('/pages/landing')
                        }}
                        style={{
                            cursor:'pointer'
                        }}
                        >
                            <div className="d-flex align-content-end fw-bold" onClick={()=>{navigate('/pages/landing')}}
                                style={{ color: '#319fa0' }} >KONSA</div>
                            <div className="d-flex align-content-end fw-bold" onClick={()=>{navigate('/pages/landing')}}
                                style={{ color: '#000000' }}
                            >COURSE</div>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-center ">
                            <div class="navbar-nav" >
                                <a class="nav-link active mr-5" aria-current="page" href="/" style={{ color: "#000000" }}>Home</a>
                                {props.isLoggedIn && <a class="nav-link mr-5" href="/pages/addinstructor" style={{ color: "#000000" }} >Add</a>}
                                {props.isLoggedIn && <a class="nav-link mr-5" href="/pages/rate" style={{ color: "#000000" }}>Rate</a>}
                                {!props.isAdmin && <a class="nav-link mr-5" href="/pages/compare" style={{ color: "#000000" }}>Compare</a>}
                                {props.isAdmin && <a class="nav-link mr-5" href="/pages/adminrequests" style={{ color: "#000000" }}>Requests</a>}
                                {props.isAdmin && <a class="nav-link mr-5" href="/pages/adminreport" style={{ color: "#000000" }}>Reports</a>}
                            </div>
                        </div>
                        <GetButtons isLoggedIn={props.isLoggedIn} />
                    </div>
                </nav>
            </div>
        //  </div>
    )
}

const GetButtons = (props) => {
    const navigate = useNavigate()
    if (props.isLoggedIn === false) {
        return (
            <div className="d-flex justify-content-end pr-20"
            style={{
                columnGap:'5px'
            }}
            >
                <Button 
                style={{
                    backgroundColor:'rgba(58, 175, 160, 1)',
                    color:'white',
                    borderRadius:'15px'
                }}
                
                    onClick={() => {
                        navigate('/pages/login')
                    }}
                    > Sign In
                </Button>
                <Button 
                style={{
                    backgroundColor:'black',
                    color:'white',
                    borderRadius:'15px'

                }}
                    onClick={() => {
                        navigate('/pages/signup')
                    }}
                > Sign Up </Button>
            </div>
        )
    }
    else {
        return (

            <>
            <div
            style={{
                paddingRight:40
            }}
            >

                <BasicMenu />
            </div>
                
            
            </>
        )}
}

export default NavbarComponent