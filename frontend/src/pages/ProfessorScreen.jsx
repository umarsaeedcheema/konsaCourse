import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import styles from './styles.module.css';
import { Grid, } from '@mui/material';
import ReviewCard from '../components/ReviewCard';

import {  useLocation } from "react-router-dom";
// import NavbarComponent from '../components/NavbarComponent';


// import styles from './styles.module.css'
// import { IconButton } from '@mui/material';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const ProfessorScreen = (proff) => {

    // const { state } = useLocation();
    // console.log(state);
    // const [profdata, setProfdata] = useState();

    // const url = "/instructor/searchInstructor/" + proff.fullName;
    // console.log(state.name);



    const labels = ["F", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
    const rating = 2.5;
    const labnum = (rating * 2) - 1;
    const numrating = 17;
    const firstname = "Suleman";
    const lastname = "Shahid";
    const tags = ["Lenient", "Accomodating", "Punctual", "Inspirational", "Interactive"];


    const reviews = [["Software Engineering CS 360", 4, "Yes", "No", "Yes", "Amazing course! loved it, was beauutiful", ["Lenient", "Accomodating", "Punctual"]],
    ["Software Engineering CS 360", 4, "Yes", "No", "Yes", "Amazing course! loved it, was beauutiful", ["Lenient", "Accomodating", "Punctual"]]];






    return (

        //<div className='d-flex flex-column justify-column-start'  >
        <div className={styles.gradient}>
            {/* <NavbarComponent
                isAdmin={false}
                isLoggedIn={true}
                style={{flex:1}}
            /> */}

            <div className="flex-column align-content-start justify-content-start" style={{ backgroundColor: "#00000000", flex: 9 }}>
                <div style={{
                    position: 'sticky',
                    marginLeft: '5%',
                    marginTop: "5%",
                    backgroundColor: "#00000000"
                }}>

                    <h1>{firstname} {lastname}</h1>
                    <p size="large">Professor in the Computer Science Department</p>

                    <div class="d-flex align-items-center ">

                        <Rating

                            name="profStars"
                            value={rating}
                            size="large"
                            //precision={0.5}

                            readOnly
                        />

                        <div className={styles.rubber} style={{ marginLeft: "10%" }}>{labels[labnum]}</div>

                    </div>

                    <div style={{ fontSize: "small", alignContent: "end" }}>Based on {numrating} ratings</div>

                    <button type="submit" className={styles.green_btn} style={{ fontSize: "20px", marginLeft: '-0.2%' }}>
                        Rate Professor
                    </button>

                    <h4>Professor {firstname}'s Top Five Tags</h4>

                    <div className="d-flex justify-content-start "
                        style={{
                            marginLeft: '-1%'
                        }}>
                        {tags.map((value, key) => {

                            return (<button className={styles.tag_btn} disabled="true">

                                {value}

                            </button>)

                        })}

                    </div>

                </div>

                <div

                    style={{
                        position: 'relative',
                        marginLeft: '-14.5%',
                        marginTop: '5%'
                    }}
                >

                    <Grid container direction={'column'} spacing={4}>


                        {reviews.map((value, key) => {

                            return (
                                <>
                                    <Grid item container>
                                        <Grid item xs={0} sm={2} />
                                        <Grid item xs={12} sm={8}>

                                            <ReviewCard
                                                title={value[0]}
                                                rating={value[1]}
                                                attendance={value[2]}
                                                cp={value[3]}
                                                takeagain={value[4]}
                                                description={value[5]}
                                                tags={value[6]}
                                                UpCount= {15}
                                                DownCount = {3}      

                                            />

                                        </Grid>
                                        <Grid item xs={0} sm={2} />

                                    </Grid>
                                </>
                            )

                        })}


                    </Grid>

                </div>
            </div>

        </div>
    )
}
export default ProfessorScreen