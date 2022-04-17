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

//ratings for instructor 2
const overallrating2 = 5;
const teachingrating2 = 4.5;
const quality1rating2 = 1.5;
const quality2rating2 = 2;

const labels = ["F","C-","C","C+","B-","B","B+","A-","A","A+"];

const tags1 = ["Lenient", "Accomodating", "Punctual", "Lenient", "Interactive"];
const tags2 = ["Strict", "Chill", "CP Intensive", "Sage", "Cool"];


function Content(props) {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6} style={{ marginTop: 20 }} >
                    <CardHeader style={{ backgroundColor: "#319FA025", borderRadius: "15px", marginBottom: 10, textAlign: 'center' }}
                        title={props.instructor1}
                    >
                    </CardHeader>
                    <CompCard 
                        overall={props.overallrating1}
                        teaching={props.teachingrating1} 
                        quality1={props.quality1rating1}
                        quality2={props.quality2rating1}
                        tags={tags1}                      
                    />
                </Grid>
                <Grid item xs={6} style={{ marginTop: 20 }} >
                    <CardHeader style={{ backgroundColor: "#319FA025", borderRadius: "15px", marginBottom: 10, textAlign: 'center' }}
                        title={props.instructor2}
                    >
                    </CardHeader>
                    <CompCard 
                        overall={props.overallrating2}
                        teaching={props.teachingrating2} 
                        quality1={props.quality1rating2}
                        quality2={props.quality2rating2}
                        tags={tags2}
                    />
                </Grid>
            </Grid>
        </>
    )
}


export const CompareFinal = (props) => {
  return (
    <div>
        <Grid container direction='column'>
            <Grid item>
                {/* <Header/> */}
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                    <Content
                    
                    instructor1 = {props.instructor1}
                    instructor2 = {props.instructor2}
                    overallrating1 = {props.overallrating1}
                    teachingrating1 = {props.teachingrating1}
                    quality1rating1 = {props.quality1rating1}
                    quality2rating1 = {props.quality2rating1}
                    overallrating2 = {props.overallrating2}
                    teachingrating2 = {props.teachingrating2}
                    quality1rating2 = {props.quality1rating2}
                    quality2rating2 = {props.quality2rating2}
                    
                   ></Content>
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
    </div>

  )
}


export default CompareFinal