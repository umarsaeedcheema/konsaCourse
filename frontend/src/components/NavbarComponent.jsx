import React from 'react'
import { useNavigate } from 'react-router-dom';
import BasicMenu from './BasicMenu'
import styles from '../pages/styles.module.css'

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
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <div class="collapse navbar-collapse justify-center ">
                            <div class="navbar-nav" >
                                <a class="nav-link active mr-5" aria-current="page" href="/" style={{ color: "#000000" }}>Home</a>
                                <a class="nav-link mr-5" href="/pages/search" style={{ color: "#000000" }} >Search</a>
                                {!props.isAdmin && <a class="nav-link mr-5" href="/pages/rate" style={{ color: "#000000" }}>Rate</a>}
                                {!props.isAdmin && <a class="nav-link mr-5" href="/pages/compare" style={{ color: "#000000" }}>Compare</a>}
                                {props.isAdmin && <a class="nav-link mr-5" href="/pages/admin_requests" style={{ color: "#000000" }}>Requests</a>}
                                {props.isAdmin && <a class="nav-link mr-5" href="/pages/admin_reports" style={{ color: "#000000" }}>Reports</a>}
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
            <div className="d-flex justify-content-end pr-20">
                <button className={styles.green_btn}
                style={{
                    width:'80%'
                }}
                
                    onClick={() => {
                        navigate('/pages/login')
                    }}
                    > Sign In
                </button>
                <button className={styles.white_btn}
                style={{
                    // width:'80%'
                    height:'20%',
                    marginTop:'4%',
                    backgroundColor:'black',
                    color:'white'

                }}
                    onClick={() => {
                        navigate('/pages/signup')
                    }}
                > Sign Up </button>
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