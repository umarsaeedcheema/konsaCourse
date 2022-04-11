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
                
                <p>{props.coursename}</p>
                <p>({props.coursecode})</p>
                <p>{props.username}</p>
                <p>{props.description}</p>
                
            </CardContent>

            <button type="submit" className={styles.green_btn}>
				Restore
			</button>

            <button type="submit" className={styles.green_btn}>
				Remove
			</button>


        </Card>
    );
}
export default ReportCard
