import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import styles from '../pages/styles.module.css'



const RequestCard = (props) => {
    
    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#319FA025", borderRadius: "15px" }}>

            <CardContent>
                
                <div className='d-flex flex-row'>
                    <div><Typography className='boldText'   >{props.coursename}</Typography></div>
                    <div><Typography>({props.coursecode})</Typography></div>
                </div>
                
                
                <p>{props.profname}</p>
                
            </CardContent>

            <button type="button" className={styles.green_btn}>
				Approve
			</button>

            <button type="button" className={styles.black_btn}>
				Decline
			</button>




        </Card>
    );
}
export default RequestCard
