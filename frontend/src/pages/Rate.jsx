import React from 'react'
import styles from './styles.module.css'
import NavbarComponent from '../components/NavbarComponent'
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material'
import SearchBar from '../components/SearchBar'
import { Rating } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


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

  const tags = ["Lenient", "Accomodating", "Punctual", "Inspirational", "Interactive"];


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
          marginTop:'5%',
          borderRadius: '5%',
          backgroundColor: 'rgba(58, 175, 160, 0.05)',
          margin: 'auto',
          width: '50%'
        }}

      >

        <div
          style={{
            marginTop: '5%'
          }}
        >

          <h4
            style={{
              marginLeft: '5%'
            }}
          >Search Instructor</h4>
          <SearchBar placeholder={"Instructor"} />
          <h4
            style={{
              marginLeft: '5%'
            }}

          >Search Course Code</h4>
          <SearchBar placeholder={'Search Course Code'} />
          <h4
            style={{
              marginLeft: '5%'
            }}
          >Search Course Name</h4>
          <SearchBar placeholder={'Search Course Name'} />
        </div>

        <div
          style={{
            marginLeft: '-11%'
          }}
        >
          <h4>Rate Professor</h4>
          <Rating />


        </div>
        <div className="inline-block">

          <div className='d-flex'>
            <h4>Did this course have attendance?</h4>
            <IconButton aria-label='check circle icon'

              style={{
                color: checkIconColor
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
                color: crossIconColor
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
            <h4>Did this course have class participation?</h4>
            <IconButton aria-label='check circle icon'
              style={{
                color: participationIcon
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
            <h4>Would you take this course again?</h4>
            <IconButton aria-label='check circle icon'
              style={{
                color: courseIcon
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
          className='inline-block'
          style={{
            marginLeft: '15%'
          }}
        >
          <div style={{
            display: 'inline-grid',
          }}>
            <h4

            >Rate Professor's Teaching Methodology</h4>
            <Rating
              style={{
                margin: 'auto'
              }} />
          </div>

          <div
            style={{
              display: 'inline-grid',
            }}
          >
            <h4>Rate Professor's Teaching Methodology</h4>
            <Rating
              style={{
                margin: 'auto'
              }} />
          </div>
          <div
            style={{
              display: 'inline-grid',
            }}>
            <h4>Rate Professor's Teaching Methodology</h4>
            <Rating
              style={{
                margin: 'auto'
              }} />
          </div>
          <div
            style={{
              display: 'inline-grid',
            }}
          >
            <h4>Rate Professor's Teaching Methodology</h4>
            <Rating
              style={{
                margin: 'auto'
              }} />
          </div>
        </div>

        <div>
          {tags.map((value) => {

            return (<button className={styles.tag_btn} disabled="true">

              {value}


            </button>)

          })}
        </div>

        <div
          className='d-flex flex-col'
          style={{
            marginLeft: '-33%'
          }}
        >
          <h4>Leave a Comment:</h4>
          <div
            style={{
              height: '200px'
            }}
          >

            <input type={'text'} placeholder='What do you want other students to know about this professor'
              style={{
                // display:'flex',
                // justifyContent:'start',
                width: '165%',
                height: '50%',
                paddingtop:'-15px',
                paddingLeft: '5px',
                borderRadius: '15px',
                backgroundColor: 'rgba(58, 175, 160, 0.1)'
              }}

            ></input>
            <button
              variant='contained'
              className={styles.green_btn}
              style={{
                marginLeft: '60%'
              }}
            >Submit</button>
          </div>
        </div>

      </Grid>




    </div>
  )
}

export default Rate