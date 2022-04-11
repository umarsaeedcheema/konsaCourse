import React from 'react'
import styles from '../pages/styles.module.css'

const NavbarComponent = () => {

    return (
        <div className={styles.gradient}>
            <div className='d-flex justify-content-center flex-1 ' style={{ backgroundColor: "#00ffff00" }} >   </div>
            <div className='d-flex  justify-content-center ' style={{ flex: "9", backgroundColor: "#00ffff00" }}></div>
            <div  style={{ height: '100vh' }}> 
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid" style={{backgroundColor:"#00FF0000"}}>
                        <div className="row justify-content-start pl-20">
                            <a class="navbar-brand" href="./Landing" 
                            style={{color:'white'}}
                            >KONSACOURSE</a>
                        </div>
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <div class="collapse navbar-collapse justify-content-center ">
                            <div class="navbar-nav" >
                                <u><a class="nav-link active mr-5" aria-current="page" href="./Landing" style={{color:"#000000"}}>Home</a></u>
                                <a class="nav-link mr-5" href="./Search"  style={{color:"#000000"}} >Search</a>
                                <a class="nav-link mr-5" href="./Rate"  style={{color:"#000000"}}>Rate</a>
                                <a class="nav-link mr-5" href="./Compare" style={{color:"#000000"}}>Compare</a>
                            </div>
                        </div>
                        <div className="justify-content-end pr-20">
                            <button className="btn btn-success mr-5 rounded-pill"> SignIn </button>
                            <button className="btn btn-dark rounded-pill"> SignUp </button>

                        </div>
                    </div>
                </nav>
                <div className='d-flex align-items-center justify-content-start ml-20 ' style={{ width: '50%', height: "100%" }} >
                    <div style={{ width: "50%", height: "20%" }}>
                        <h2>Let's find the perfect <br />course for you !</h2>
                        <form >
                            <div class="container">
                                <div class="d-flex ">
                                    <div class="col-8">
                                        <div class="search"> <i class="bi bi-search"></i> <button class="btn">Search</button> </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent