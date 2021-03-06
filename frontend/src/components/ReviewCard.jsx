import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FlagIcon from '@mui/icons-material/Flag';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';
const axios = require('axios');

const ReviewCard = (props) => {
    const [UpCount, setUpCount] = useState(parseInt(props.UpCount))
    const [DownCount, setDownCount] = useState(parseInt(props.DownCount))

    const yesno = ['No','Yes']

    const [flagColor, setFlagColor] = useState()
    const [thumbsUpColor, setthumbsUpColor] = useState()
    const [thumbsDownColor, setthumbsDownColor] = useState()

    const [thumbsUp, setThumbsUp] = useState(false)
    const [thumbsDown, setThumbsDown] = useState(false)

    const handleReport = async () => {
		//e.preventDefault();

        const reportobject = {
            ratingID:props.id
            
        }

    console.log("reportobject:", reportobject);


    const url = `/report/addReport`;
    await axios.post(url, reportobject).then((res) => {
        console.log("Hello");
        console.log(res);
    })
    .catch(function (error) {

        console.log(error);
    });
  }






    return (
        <Card sx={{ minWidth: 275 }}
            style={{
                backgroundColor: "#319FA025",
                borderRadius: "15px",
                width: 500,
                // minWidth:275
            }}>


            <Grid container >
                <CardContent
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >

                    <Typography
                        style={{
                            flexBasis: '65%'
                        }}
                        variant='h6'
                        className='fw-bold'
                    >{props.title}</Typography>

                    <Rating
                        value={props.rating}
                        size="large"
                        readOnly
                    />


                    <Typography flexBasis={'35%'}
                    >Attendance: {yesno[parseInt(props.attendance)]}</Typography>
                    <Typography flexBasis={'26%'}>CP: {yesno[parseInt(props.cp)]}</Typography>
                    <Typography>Would Take Again: {yesno[parseInt(props.takeagain)]}</Typography>

                    <Typography>{props.description}</Typography>

                    <div className="d-flex justify-content-start pt-2"
                    style={{
                        columnGap:'5px'
                    }}
                    >
                        {props.tags.map((value, key) => {

                            return (
                                <Button variant='contained' disabled="true"
                                    style={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        borderRadius: '15px',
                                        columnGap: '2px'
                                    }}>

                                    {value}

                                </Button>)

                        })}

                    </div>

                    <p>{props.profname}</p>


                    <Grid container className='justify-content-end'>
                        <Grid item >
                            <IconButton aria-label="thumbs-up"
                                style={{
                                    color: thumbsUpColor
                                }}
                                onClick={() => {
                                    if (thumbsUp) {
                                        setthumbsUpColor()
                                        setThumbsUp(false)
                                        setUpCount(UpCount-1)
                                    }
                                    else {
                                        setthumbsUpColor('green')
                                        setThumbsUp(true)
                                        setUpCount(UpCount+1)

                                    }
                                    //setthumbsDownColor()
                                    if (thumbsDown) {
                                        setDownCount(DownCount-1)
                                        setThumbsDown(false)
                                        setthumbsDownColor()
                                    }
                                    
                                        
                                }}
                            >

                                <ThumbUpIcon
                                ></ThumbUpIcon>
                                <Typography variant='subtitle2'>{UpCount}</Typography>

                            </IconButton>
                        </Grid>
                        <Grid item >

                            <IconButton aria-label="thumbs-down"
                                style={{
                                    color: thumbsDownColor
                                }}
                                onClick={() => {
                                    if (thumbsDown) {
                                        setthumbsDownColor()
                                        setThumbsDown(false)
                                        setDownCount(DownCount-1)
                                    }
                                    else {
                                        setthumbsDownColor('black')
                                        setThumbsDown(true)
                                        setDownCount(DownCount+1)
                                    }
                                    
                                    if (thumbsUp) {
                                        setUpCount(UpCount-1)
                                        setThumbsUp(false)
                                        setthumbsUpColor()
                                    }
                                    
                                    

                                }}
                            >

                                <ThumbDownIcon

                                ></ThumbDownIcon>
                                <Typography variant='subtitle2'>{DownCount}</Typography>

                            </IconButton>
                        </Grid>
                        <Grid item>

                            <IconButton aria-label="flag"
                                style={{
                                    color: flagColor
                                }}
                                onClick={() => {
                                    setFlagColor('red')
                                    handleReport()

                                }}>

                                <FlagIcon

                                ></FlagIcon>

                            </IconButton>
                        </Grid>
                    </Grid>


                </CardContent>


            </Grid>

        </Card>
    );
}
export default ReviewCard
