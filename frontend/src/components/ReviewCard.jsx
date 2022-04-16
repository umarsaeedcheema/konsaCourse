import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import styles from '../pages/styles.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FlagIcon from '@mui/icons-material/Flag';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const ReviewCard = (props) => {
    const UpCount = props.UpCount
    const DownCount = props.DownCount

    const [flagColor, setFlagColor] = useState()
    const [thumbsUpColor, setthumbsUpColor] = useState()
    const [thumbsDownColor, setthumbsDownColor] = useState()
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

                        
                        
                        >Attendance: {props.attendance}</Typography>
                        <Typography flexBasis={'26%'}>CP: {props.cp}</Typography>
                        <Typography>Would Take Again: {props.takeagain}</Typography>

                        <Typography>{props.description}</Typography>

                        <div className="justify-content-start pt-10">
                            {props.tags.map((value, key) => {

                                return (
                                    <button className={styles.tag_btn} disabled="true">

                                        {value}

                                    </button>)

                            })}

                        </div>

                        <p>{props.profname}</p>


                        <Grid container className='justify-content-end'>
                            <Grid item >
                                <IconButton aria-label="thumbs-up">

                                    <ThumbUpIcon
                                        style={{
                                            color: thumbsUpColor
                                        }}
                                        onClick={() => {
                                            setthumbsUpColor('green')

                                        }}

                                    ></ThumbUpIcon>
                                    <Typography variant='subtitle2'>{UpCount}</Typography>

                                </IconButton>
                            </Grid>
                            <Grid item >

                                <IconButton aria-label="thumbs-down">

                                    <ThumbDownIcon
                                        style={{
                                            color: thumbsDownColor
                                        }}
                                        onClick={() => {
                                            setthumbsDownColor('black')

                                        }}

                                    ></ThumbDownIcon>
                                    <Typography variant='subtitle2'>{DownCount}</Typography>

                                </IconButton>
                            </Grid>
                            <Grid item>

                                <IconButton aria-label="flag">

                                    <FlagIcon
                                        style={{
                                            color: flagColor
                                        }}
                                        onClick={() => {
                                            setFlagColor('red')

                                        }}


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
