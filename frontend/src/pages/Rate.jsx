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


const Rate = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log("Logged in User");
    }
  }, []);

  let loggedin = false;
  let adminin = false;

  if (user) {
    if (user.isAdmin) {
      adminin = true;
    } else {
      loggedin = true;
    }
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
          >Search Instructor</h4>
          <SearchBar placeholder={"Instructor"} />
          <h4
            style={{
              marginLeft: '12%'
            }}

          >Search Course Code</h4>
          <SearchBar placeholder={'Search Course Code'} />
          <h4
            style={{
              marginLeft: '12%'
            }}
          >Search Course Name</h4>
          <SearchBar placeholder={'Search Course Name'} />
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

              >Teaching Methodology</p>
              <Rating
                style={{
                  marginTop: '-5%'
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
              >Course</p>
              <Rating
                style={{
                  marginTop: '-8%'
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
              onClick={() => {

              }}

            ></textarea>
            <Button
              variant='contained'
              size='large'
              style={{
                marginLeft: '60%',
                paddingBottom: '-5%',
                borderRadius: '15px',
                color: 'white',

              }}
            >Submit</Button>
          </div>
        </div>

      </Grid>

    </div>
  )
}

export default Rate