import React, { useEffect, useState } from 'react'
import CourseBar from '../components/CourseBar'
import InstructorBar from '../components/InstructorBar';
import styles from './styles.module.css';
import Content from './CompareFinal.jsx'
import { Button } from '@mui/material';
import NavbarComponent from '../components/NavbarComponent';
import { Grid } from '@mui/material';
const axios = require('axios');




const Comparer = () => {


    const [course, setCourse] = useState("Course");
    const [instructor1, setInstructor1] = useState("Instructor 1");
    const [instructor2, setInstructor2] = useState("Instructor 2");
    const [error1, setError1] = useState(false);

    const [cbool, setCbool] = useState(true);

    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    //const [url, setUrls] = useState({url1:"/course/courseByInstructor/never/ever", url2:"/course/courseByInstructor/never/ever"});


    useEffect(() => {

        if (data1 !== null && data2 !== null) {
            if (data1.instructorName !== "" && data2.instructorName !== "") {
                setCbool(false);
                setError1(false);
                //console.log(data1[0].instructorName);
                console.log("SMTH WENT RIGHT");
            }
        }
        // console.log(data1.toJSON());

    }, [data1, data2])
    console.log(data1)
    const clearInput = () => {
        setCourse();
        setInstructor1();
        setInstructor2();
        setError1(false);
        setCbool(true);
        //setUrls({url1:"/course/courseByInstructor/never/ever",url2:"/course/courseByInstructor/never/ever"})
    };

    const getData1 = async (url1, url2) => {


        console.log("I AM HERE");
        console.log(url1);
        console.log(url2);
        await axios.get(url1).then(async (temp1) => {

            console.log("layer 1");
            console.log(temp1.data[0].instructorName);
            //console.log(data1);
            setData1(temp1.data[0]);
            //console.log(data1);


            await axios.get(url2).then((temp2) => {

                setData2(temp2.data[0]);
                // console.log("I GOT HEREEEEEEEE");



            }).catch((error) => {
                console.log(error.message);
                setError1(true);
            });

        }).catch((error) => {
            console.log(error.message);
            setError1(true);
        });
        // console.log(data1.)
    }

    const lbool = true;
    const abool = false;
    return (

        <div className={styles.gradient}>
            <div>
                <NavbarComponent
                    isLoggedIn={lbool}
                    isAdmin={abool}
                />
            </div>

            <Grid container
                style={{
                    marginTop: '5%'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        marginLeft: '40%'

                    }}
                >
                    <div
                        style={{
                            // marginLeft:'-10%'
                        }}
                    >

                        {cbool && <CourseBar updateValue={setCourse}

                        ></CourseBar>}
                    </div>

                    <div
                        style={{
                            marginLeft: '-100%'
                        }}

                    >
                        {cbool && <InstructorBar updateValue={setInstructor1} coursevalue={course}></InstructorBar>}

                    </div>
                    {/* <p>{course}</p> */}
                    {/* <p>{instructor1}</p> */}

                    <div
                    style={{
                        marginLeft:'100%',
                        marginTop:'-16%'
                    }}
                    >
                        {cbool && <InstructorBar updateValue={setInstructor2} coursevalue={course}></InstructorBar>}

                    </div>
                </div>

                {/* <p>{instructor2}</p> */}
                {cbool && <Button type="button" variant='contained'
                    style={{
                        borderRadius: '15px',
                        width: '10%',
                        height: '10%',
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '11%',
                        marginLeft: '-19%'

                    }}
                    onClick={(event) => {

                        const u1 = ("/course/courseByInstructor/" + course + "/" + instructor1).replaceAll(' ', '%20');
                        const u2 = ("/course/courseByInstructor/" + course + "/" + instructor2).replaceAll(' ', '%20');
                        getData1(u1, u2);

                    }}>
                    Compare
                </Button>}
                {error1 && <div className={styles.error_msg}
                style={{
                    height:'10%'
                }}
                
                >Incorrect Selection</div>}

                {/* {dbool && <GetData1 url1={u1} url2={u2} />} */}
                {!cbool && <Content
                    instructor1={data1.instructorName}
                    instructor2={instructor2}
                    overallrating1={data1.courseRating}
                    teachingrating1={data1.learnRating}
                    quality1rating1={data1.gradeRating}
                    quality2rating1={data1.workRating}

                    overallrating2={3}
                    teachingrating2={2}
                    quality1rating2={1}
                    quality2rating2={4}></Content>}


                {!cbool && <button type="button" className={styles.green_btn} onClick={(event) => {


                    clearInput();


                }}>
                    Compare Again
                </button>}


            </Grid>

        </div>
    )
}
export default Comparer
