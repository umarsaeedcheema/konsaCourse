import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import styles from '../pages/styles.module.css'

const labels =  ["F","C-","C","C+","B-","B","B+","A-","A","A+"];



const  CompCard = (props) => {
    
    let gradnum = Math.round(((props.overall)*2)-1);

    if (gradnum < 0) {
        gradnum = 0;
    }
    
    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#319FA025", borderRadius: "15px" }}>

            <CardContent>
                <Typography gutterBottom variant='h5'>
                    Overall Rating
                </Typography>

                <Rating
                    value={props.overall}
                    size="large"
                    precision={0.25}                    
                    readOnly
                />

                
                <div className={styles.rubber}>{labels[gradnum]}</div>

                <Typography > Quality1 Rating </Typography>

                <Rating 
                    value={props.teaching}
                    size="small"
                    precision={0.25}
                    readOnly
                />
                
                <Typography >
                    Quality2 Rating:
                </Typography>
                <Rating 
                    value={props.quality1}
                    precision={0.25}
                    size="small"
                    readOnly
                />
                <Typography >
                    Quality3 Rating:
                </Typography>
                <Rating 
                    value={props.quality2}
                    precision={0.25}
                    size="small"
                    readOnly
                />
                
                
            </CardContent>
            <div>
                <Typography style={{ paddingLeft: 15, fontSize: 20 }}>
                    Top Five Tags:
                </Typography>
                <div className = "d-flex justify-content-start">
                    {(props.tags).map((value,key) => {

                        return (<button className={styles.tag_btn} disabled="true">

                            {value}

                        </button>)

                    })}

                </div>
            </div>

        </Card>
    );
}
export default CompCard
