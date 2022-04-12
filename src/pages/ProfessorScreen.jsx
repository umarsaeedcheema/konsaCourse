import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css';
import { Divider, Grid } from '@mui/material';
import ReviewCard from '../components/ReviewCard';
import NavbarComponent from '../components/NavbarComponent';
// import styles from './styles.module.css'


const ProfessorScreen = () => {

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
        <NavbarComponent
                isAdmin={false}
                isLoggedIn={true}
                style={{flex:1}}
            />

            <div className="flex-column align-content-start justify-content-start" style={{backgroundColor:"#00000000",flex:9}}>
                <div style={{
                    position: 'sticky',
                    marginLeft: '5%',
                    marginTop: "10%",
                    backgroundColor:"#00000000"
                }}>

                    <h1>{firstname} {lastname}</h1>
                    <p size="large">Professor in the Computer Science Department</p>

                    <div class="d-flex align-items-center">

                        <Rating

                            name="profStars"
                            value={rating}
                            size="large"
                            //precision={0.5}

                            readOnly
                        />

                        <div className={styles.rubber}>{labels[labnum]}</div>

                    </div>

                    <div style={{ fontSize: "small" }}>Based on {numrating} ratings</div>

                    <button type="submit" className={styles.green_btn}>
                        Rate Professor
                    </button>

                    <h4>Professor {firstname}'s Top Five Tags</h4>

                    <div className="d-flex justify-content-start">
                        {tags.map((value, key) => {

                            return (<button className={styles.tag_btn} disabled="true">

                                {value}

                            </button>)

                        })}

                    </div>

                </div>

                <div
                
                style={{
                    position:'relative',
                    marginLeft:'-1%',
                    marginTop:'5%'
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
//A commmit to check branch
export default ProfessorScreen