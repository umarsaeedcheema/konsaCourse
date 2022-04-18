import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import styles from './styles.module.css';
import { Grid, } from '@mui/material';
import ReviewCard from '../components/ReviewCard';
import { Button } from '@mui/material';

import {  useLocation } from "react-router-dom";
const axios = require('axios');
// import NavbarComponent from '../components/NavbarComponent';


// import styles from './styles.module.css'
// import { IconButton } from '@mui/material';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const ProfessorScreen = (proff) => {

    const { state } = useLocation();
    console.log(state);
    const [profdata, setProfdata] = useState([null, false, 0, null]);

    const url = ("/instructor/searchInstructor/" + state.name).replaceAll(' ', '%20');
    console.log(state.name);
// >>>>>>> main

    const getData = async () => {
        await axios.get(url).then(async (temp)=>{
            let gradnum = Math.round(parseFloat(((temp.data[0].overallRating['$numberDecimal'])*2)-1));

                if (gradnum < 0) {
                    gradnum = 0;
                }
            const newurl = ("/rate/getRatings/" + state.name).replaceAll(' ', '%20');
            await axios.get(newurl).then((newtemp)=> {
                setProfdata([temp.data[0],true,gradnum,newtemp.data])
                console.log("PROF DATA", newtemp.data);
            }).catch((error) => {
                console.log("ERROR 1", error)
            })
             

        }).catch((error)=> {
            console.log("ERROR 2", error)
        })
    }

    useEffect(()=>{
        getData();
    },[])


    const labels = ["F", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
    const rating = 4.5;
    const labnum = (rating * 2) - 1;
    const numrating = 17;
    const firstname = "Suleman";
    const lastname = "Shahid";
    const tags = ["Lenient", "Accomodating", "Punctual", "Inspirational", "Interactive"];




    const reviews = [["Software Engineering CS 360", 4, "Yes", "No", "Yes", "Amazing course! loved it, was beauutiful", ["Lenient", "Accomodating", "Punctual"]],
    ["Software Engineering CS 360", 4, "Yes", "No", "Yes", "Amazing course! loved it, was beauutiful", ["Lenient", "Accomodating", "Punctual"]]];
 



    return (

        //<div className='d-flex flex-column justify-column-start'  >
        <>
        {profdata[1] && <div className={styles.gradient}>
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

                    <h1>{profdata[0].fullName}</h1>
                    <p size="large">Professor in the Computer Science Department</p>

                    <div class="d-flex align-items-center ">

                        <Rating

                            name="profStars"
                            value={profdata[0].overallRating['$numberDecimal']}
                            size="large"
                            precision={0.25}

                            readOnly
                        />

                        <div className={styles.rubber} style={{ marginLeft: "10%" }}>{labels[profdata[2]]}</div>

                    </div>

                    <div style={{ fontSize: "small", alignContent: "end" }}>Based on {profdata[0].numReviews} ratings</div>

                    <button type="submit" className={styles.green_btn} style={{ fontSize: "20px", marginLeft: '-0.2%' }}>
                        Rate Professor
                    </button>

                    <h4>Professor {profdata[0].firstName}'s Top Five Tags</h4>

                    <div className="d-flex justify-content-start "
                        style={{
                            columnGap:'5px'

                            }}>
                        {tags.map((value, key) => {

                            return (<Button variant='contained' disabled="true"
                            style={{
                                backgroundColor:'black',
                                color:'white',
                                borderRadius:'15px',
                            }}
                            >

                                {value}

                            </Button>)

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


                        {(profdata[3]).map((value, key) => {

                            return (
                                <>
                                    <Grid item container>
                                        <Grid item xs={0} sm={2} />
                                        <Grid item xs={12} sm={8}>

                                            <ReviewCard
                                                title={value.courseName}
                                                rating={value.instructorRating['$numberDecimal']}
                                                attendance={value.answers[0]}
                                                cp={value.answers[1]}
                                                takeagain={value.answers[2]}
                                                description={value.comment}
                                                tags={[]}
                                                UpCount= {value.likes}
                                                DownCount = {value.dislikes}
                                                id = {value._id}      

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

        </div>}
        </>
    )
}
export default ProfessorScreen