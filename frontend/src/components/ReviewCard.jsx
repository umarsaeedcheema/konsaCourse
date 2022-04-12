import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import styles from '../pages/styles.module.css';

const ReviewCard = (props) => {
    
    return (
        <Card sx={{minWidth:275}} 
        style={{ backgroundColor: "#319FA025",
         borderRadius: "15px", 
         width:500,
        // minWidth:275
        }}>

            <CardContent>
                
                <Typography>{props.title}</Typography>

                <Rating
                    value={props.rating}
                    size="large"                    
                    readOnly
                />

                <Typography>Attendance: {props.attendance}</Typography>
                <Typography>CP: {props.cp}</Typography>
                <Typography>Would Take Again: {props.takeagain}</Typography>
                <Typography>{props.description}</Typography>

                <div className = "d-flex justify-content-start">
                    {props.tags.map((value,key) => {

                        return (<button className={styles.tag_btn} disabled="true">

                            {value}

                        </button>)

                    })}

                </div>

                
                
                <p>{props.profname}</p>
                
            </CardContent>

            




        </Card>
    );
}
export default ReviewCard
