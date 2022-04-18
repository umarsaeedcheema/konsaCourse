import React from 'react'
import styles from './styles.module.css'
import NavbarComponent from '../components/NavbarComponent'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import SearchBar from '../components/SearchBar'
import { Rating } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material'
import CourseBar from '../components/CourseBar'
import InstructorBar from '../components/InstructorBar';
import { useNavigate } from 'react-router-dom'

const axios = require('axios');


const Rate = () => {
  const navigate=useNavigate()

  const [loggedin, setLoggedin] = useState();
  const [adminin, setAdminin] = useState();

  //const [cbool, setCbool] = useState(false);
  
  const [course, setCourse] = useState("");

  const [instructor1, setInstructor1] = useState("Instructor 1");

  const [email, setEmail] = useState("email");
  const [comment, setComment] = useState("comment");
  //const [answers, setAnswers] = useState([0,0,0]);

  const [inrating, setInrating] = useState(0);
  const [crating, setCrating] = useState(0);
  const [teaching, setTeaching] = useState(0);
  const [comm, setComm] = useState(0);
  const [accom, setAccom] = useState(0);
  const [workload, setWorkload] = useState(0);
  const [grading, setGrading] = useState(0);
  const [learning, setLearning] = useState(0);



  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      //console.log(foundUser);
      if (foundUser.isAdmin) {
        setAdminin(true);
      } else {
        setLoggedin(true);
        setEmail(foundUser.email);
      }
      console.log("Logged in User");
    }
  }, []);

  const handleSubmit = async () => {
		//e.preventDefault();

    console.log("IN SUBMIT");
    let ansarray = [];

    if (tick1) {
      ansarray.push(1)
    } else {
      ansarray.push(0)
    }
    if (tick2) {
      ansarray.push(1)
    } else {
      ansarray.push(0)
    }
    if (tick3) {
      ansarray.push(1)
    } else {
      ansarray.push(0)
    }



    const rateobject = {
        instructorName:instructor1,
        courseName:course,
        email:email,
        comment:comment,
        answers:ansarray,
        courseRating:crating,
        instructorRating:inrating,
        individualTeachRating:teaching,
        individualCommRating:comm,
        individualAccommRating:accom,
        individualWorkLoadRating:workload,
        individualGradeRating:grading,
        individualLearnRating:learning
    }

    console.log("RATE OBJECT IS:", rateobject);


    const url = `/rate/addRating`;
    await axios.post(url, rateobject).then((res) => {
        console.log("Hello");
        console.log(res);


    })
    .catch(function (error) {

        console.log(error);

    });
  }









  const [checkIconColor, setCheckIconColor] = useState()
  const [crossIconColor, setCrossIconColor] = useState()
  const [participationIcon, setParticipationIcon] = useState()
  const [participationCrossIcon, setParticipationCrossIcon] = useState()
  const [courseIcon, setCourseIcon] = useState()
  const [courseIconCross, setCourseIconCross] = useState()

  const [tick1, setTick1] = useState(false);
  const [cross1, setCross1] = useState(false);

  const [tick2, setTick2] = useState(false);
  const [cross2, setCross2] = useState(false);

  const [tick3, setTick3] = useState(false);
  const [cross3, setCross3] = useState(false);

  const tags = ["Lenient", "Accomodating", "Punctual", "Inspirational", "Interactive", "Lenient", "Accomodating", "Punctual", "Inspirational", "Interactive"];



  return (
    <div className={styles.gradient}>
      <NavbarComponent
        isAdmin={adminin}
        isLoggedIn={loggedin}
      />


      <Grid container
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        style={{
          margin: 'auto',
          marginTop: '50px',
          borderRadius: '5%',
          backgroundColor: 'rgba(58, 175, 160, 0.05)',
          width: '50%',

        }}

      >

        <div
          style={{
            marginTop: '5%'
          }}
        >

          <h4
            style={{
              marginLeft: '14%'
            }}
          >Search Course</h4>
          <CourseBar updateValue={setCourse} />
          <h4
            style={{
              marginLeft: '12%'
            }}

          >Search Instructor</h4>
          {({course} !== "") && <InstructorBar updateValue={setInstructor1} coursevalue={course}/>}
          
        </div>

        <div className="inline-block">

          <div className='d-flex'>
            <p>Did this course have attendance?</p>
            <IconButton aria-label='check circle icon'

              style={{
                color: checkIconColor,
                marginLeft: 'auto'
              }}
              onClick={() => {
                if (cross1) {
                  setCrossIconColor()
                }
                setCheckIconColor('green')
                setTick1(true);
              }}

            >
              <CheckCircleIcon />
            </IconButton>

            <IconButton aria-label='cancel icon'
              style={{
                color: crossIconColor,

              }}
              onClick={() => {
                if (tick1) {
                  setCheckIconColor()
                }

                setCrossIconColor('red')
                setCross1(true);
              }}
            >
              <CancelIcon />
            </IconButton>
          </div>

          <div className='d-flex'
          >
            <p>Did this course have class participation?</p>
            <IconButton aria-label='check circle icon'
              style={{
                color: participationIcon,
                marginLeft: 'auto'
              }}
              onClick={() => {
                if (cross2) {
                  setParticipationCrossIcon()
                }

                setParticipationIcon('green')
                setTick2(true)
              }}
            >
              <CheckCircleIcon />
            </IconButton>
            <IconButton aria-label='cancel icon'
              style={{
                color: participationCrossIcon
              }}
              onClick={() => {
                if (tick2) {
                  setParticipationIcon()
                }

                setParticipationCrossIcon('red')
                setCross2(true)
              }}
            >
              <CancelIcon />
            </IconButton>
          </div>

          <div className='d-flex'
          >
            <p>Would you take this course again?</p>
            <IconButton aria-label='check circle icon'
              style={{
                color: courseIcon,
                marginLeft: 'auto'
              }}
              onClick={() => {

                if (cross3) {
                  setCourseIconCross()
                }
                setCourseIcon('green')
                setTick3(true)
              }}
            >
              <CheckCircleIcon />
            </IconButton>
            <IconButton aria-label='cancel icon'
              style={{
                color: courseIconCross
              }}
              onClick={() => {

                if (tick3) {
                  setCourseIcon()
                }
                setCourseIconCross('red')
                setCross3(true)
              }}
            >
              <CancelIcon />
            </IconButton>
          </div>


        </div>
        <div
          style={{
            marginLeft: '20%',
            display: 'flex',
            columnGap: '300px'
          }}
        >
          <div
            style={{


            }}
          >
            <h4>Rate Professor</h4>
            <Rating
              style={{
                marginLeft: '1%'
              }}

              onChange={(event, newValue)=> {
                setInrating(newValue);
              }}
            />
          </div>

          <div
            style={{
              marginLeft: '-30%'
            }}
          >
            <h4

            >

              Rate Course</h4>
            <Rating
              onChange={(event, newValue)=> {
                setCrating(newValue);
              }}
            />
          </div>

        </div>
        <div>


          <div
            className='inline-block'
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginLeft: '-70%',
              flexDirection: 'column'
            }}
          >
            <div style={{
              display: 'inline-grid',
            }}>
              <p

              >Teaching</p>
              <Rating
                style={{
                  marginTop: '-5%'
                }}
                onChange={(event, newValue)=> {
                  setTeaching(newValue);
                }} />
            </div>

            <div
              style={{
                display: 'inline-grid',
              }}
            >
              <p>Communication</p>
              <Rating
                style={{
                  marginTop: '-5%'
                }}
                onChange={(event, newValue)=> {
                  setComm(newValue);
                }} />
            </div>
            <div
              style={{
                display: 'inline-grid',
              }}>
              <p>Accommodating</p>
              <Rating
                style={{
                  marginTop: '-5%'
                }}
                onChange={(event, newValue)=> {
                  setAccom(newValue);
                }} />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '100%',
              marginTop: '-105%'
            }}
          >



            <div
              style={{
                display: 'inline-grid',
              }}
            >
              <p
               style={{
                marginTop:'2%'
              }}
              >Grading</p>
              <Rating
                style={{
                  marginTop: '-12%'
                }}
                onChange={(event, newValue)=> {
                  setGrading(newValue);
                }} />
            </div>
            <div
              style={{
                display: 'inline-grid',
              }}
            >
              <p
                style={{
                  marginTop: '10%'
                }}
              >Learning</p>
              <Rating
                style={{
                  marginTop: '-12%'
                }}
                onChange={(event, newValue)=> {
                  setLearning(newValue);
                }} />
            </div>
            <div
              style={{
                display: 'inline-grid',
              }}
            >
              <p
                style={{
                  marginTop: '2%'
                }}
              >Workload</p>
              <Rating
                style={{
                  marginTop: '-8%'
                }}
                onChange={(event, newValue)=> {
                  setWorkload(newValue);
                }} />
            </div>
          </div>
        </div>

        <div
          style={{
            marginLeft: '6%',
            marginRight: '6%',
            marginTop: '5%'
          }}
        >
          <h4
            style={{
              marginLeft: '0.5%',
              display: 'flex'
            }}
          >Choose Tags:</h4>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              rowGap: '10px'
            }}
          >


            {tags.map((value) => {

              return (

                <Button
                  variant='contained'
                  size='small'
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '15px',
                    margin: 'auto'


                  }}
                  

                >

                  {value}
                </Button>)

            })}
          </div>
        </div>


        <div
          className='d-flex flex-col'
          style={{
            marginLeft: '-33%',
            marginTop: '5%'
          }}
        >
          <h4>Leave a Comment:</h4>
          <div
            style={{
              height: '200px'
            }}
          >

            <textarea placeholder='What do you want other students to know about this professor'
              style={{
                width: '165%',
                height: '50%',
                paddingtop: '-15px',
                paddingLeft: '5px',
                borderRadius: '15px',
                backgroundColor: 'rgba(58, 175, 160, 0.1)'
              }}
              onChange={(event)=>{
                setComment(event.target.value);
              }}

            ></textarea>
            <Button
              type="button"
              
              variant='contained'
              size='large'
              style={{
                marginLeft: '60%',
                paddingBottom: '-5%',
                borderRadius: '15px',
                color: 'white',

              }}
              onClick={(event)=>{
                handleSubmit();
                navigate('/pages/landing')
              }}
              // onClick={()=>{
              // }}


            >Submit</Button>
          </div>
        </div>

      </Grid>

    </div>
  )
}

export default Rate