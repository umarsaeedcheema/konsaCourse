import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Rating from '@mui/material/Rating';
import styles from '../pages/styles.module.css'




const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const instructor1 = "Shafay Ismail";
const instructor2 = "Laila Bushra";

//ratings for instructor 1
const overallrating1 = 3;
const teachingrating1 = 3.5;
const quality1rating1 = 2.5;
const quality2rating1 = 4.5;
const quality3rating1 = 4;

//ratings for instructor 2
const overallrating2 = 5;
const teachingrating2 = 4.5;
const quality1rating2 = 1.5;
const quality2rating2 = 2;
const quality3rating2 = 0.5;

const labels = ["F","C-","C","C+","B-","B","B+","A-","A","A+"];

const tags1 = ["Lenient", "Accomodating", "Punctual", "Lenient", "Interactive"];
const tags2 = ["Strict", "Chill", "CP Intensive", "Sage", "Cool"];





function BasicCard(props) {
    
    const gradnum = ((props.overall)*2)-1;
    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#319FA025", borderRadius: "15px" }}>

            <CardContent>
                <Typography gutterBottom variant='h5'>
                    Overall Rating
                </Typography>

                <Rating
                    value={props.overall}
                    size="large"                    
                    readOnly
                />

                
                <div className={styles.rubber}>{labels[gradnum]}</div>

                <Typography > Teaching Rating </Typography>

                <Rating 
                    value={props.teaching}
                    size="small"
                    readOnly
                />
                
                <Typography >
                    Quality1 Rating:
                </Typography>
                <Rating 
                    value={props.quality1}
                    size="small"
                    readOnly
                />
                <Typography >
                    Quality2 Rating:
                </Typography>
                <Rating 
                    value={props.quality2}
                    size="small"
                    readOnly
                />
                <Typography >
                    Quality3 Rating:
                </Typography>
                <Rating 
                    value={props.quality3}
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

const Content = () => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6} style={{ marginTop: 20 }} >
                    <CardHeader style={{ backgroundColor: "#319FA025", borderRadius: "15px", marginBottom: 10, textAlign: 'center' }}
                        title={instructor1}
                    >
                    </CardHeader>
                    <BasicCard 
                        overall={overallrating1}
                        teaching={teachingrating1} 
                        quality1={quality1rating1}
                        quality2={quality2rating1}
                        quality3={quality3rating1}
                        tags={tags1}                      
                    />
                </Grid>
                <Grid item xs={6} style={{ marginTop: 20 }} >
                    <CardHeader style={{ backgroundColor: "#319FA025", borderRadius: "15px", marginBottom: 10, textAlign: 'center' }}
                        title={instructor2}
                    >
                    </CardHeader>
                    <BasicCard 
                        overall={overallrating2}
                        teaching={teachingrating2} 
                        quality1={quality1rating2}
                        quality2={quality2rating2}
                        quality3={quality3rating2} 
                        tags={tags2}
                    />
                </Grid>
            </Grid>

        </>

    )
}

export default Content