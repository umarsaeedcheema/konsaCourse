import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import styles from '../pages/styles.module.css'



const ReportCard = (props) => {
    
    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#319FA025", borderRadius: "15px" }}>

            <CardContent>
                
                <div className='d-flex flex-row'>
                    <div><Typography variant='h5'className={styles.report_card}>{props.coursename}</Typography></div>
                    <div><Typography variant='h5' className={styles.report_card}>({props.coursecode})</Typography> </div>
                    <Typography variant='h5' className={styles.wordspace}>-</Typography>
                    <Typography variant='h5'> {props.username}</Typography>
                </div>
                <Typography variant='h6' className={styles.report_card_description}>{props.description}</Typography>
            </CardContent>
            <div
            style={{
                float:'right'
            }}
            >
            <button type="submit" className={styles.green_btn}>
				Restore
			</button>

            <button type="submit" className={styles.black_btn}>
				Remove
			</button>
            </div>


        </Card>
    );
}
export default ReportCard
