import React from 'react'
import { Divider, Grid } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CompCard from '../components/ComparisonCard.jsx'
// import Header from '../components/Header.jsx';


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


function Content() {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6} style={{ marginTop: 20 }} >
                    <CardHeader style={{ backgroundColor: "#319FA025", borderRadius: "15px", marginBottom: 10, textAlign: 'center' }}
                        title={instructor1}
                    >
                    </CardHeader>
                    <CompCard 
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
                    <CompCard 
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


export const CompareFinal = () => {
  return (
    <div>
        <Grid container direction='column'>
            <Grid item>
                {/* <Header/> */}
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                    <Content></Content>
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
    </div>

  )
}


export default CompareFinal