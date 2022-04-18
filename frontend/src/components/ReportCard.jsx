import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { Button } from '@mui/material';
const axios = require('axios');


const ReportCard = (props) => {

    const [restore, setRestore] = useState(false);
    const [remove, setRemove] = useState(false);

    const approveRequest = async () => {
        //e.preventDefault();
      
            const reportobject = {
                ratingID:props.id
                
            }
      
        console.log("reportobject:", reportobject);
      
      
        const url = `/admin/restoreRating`;
        await axios.post(url, reportobject).then((res) => {
            console.log("Hello");
            console.log(res);
        })
        .catch(function (error) {
      
            console.log(error);
        });
      }

      const declineRequest = async () => {
        //e.preventDefault();
      
            const reportobject = {
                ratingID:props.id
                
            }
      
        console.log("reportobject:", reportobject);
      
      
        const url = `/admin/removeRating`;
        await axios.post(url, reportobject).then((res) => {
            console.log("Hello");
            console.log(res);
        })
        .catch(function (error) {
      
            console.log(error);
        });
      }


    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#319FA025", borderRadius: "15px" }}>

            <CardContent>

                <div className='d-flex flex-row'
                    style={{
                        padding: '5px',
                    }}>
                    <div><Typography className='fw-bold'
                        style={{
                            margin: '5px',
                            fontSize: '30px'
                        }}

                    >{props.coursename}</Typography></div>
                    <div><Typography className='fw-bold'
                        style={{
                            margin: '5px',
                            fontSize: '30px'
                        }}

                    >({props.coursecode})</Typography> </div>
                    <Typography className='fw-bold'
                        style={{
                            margin: '5px',
                            fontSize: '30px'
                        }}

                    >-</Typography>
                    <Typography
                        style={{
                            margin: '5px',
                            fontSize: '30px'
                        }}

                    > {props.username}</Typography>
                </div>
                <Typography
                    style={{
                        marginLeft: '1%'
                    }}
                >{props.description}</Typography>
            </CardContent>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'end',
                    marginRight: '2%',
                    columnGap:'5px',
                    paddingBottom:'1%'
                }}
            >
                {!restore && !remove && <Button type="submit" variant='contained'
                style={{
                    borderRadius:'15px'
                }}
                    onClick={() => {
                        setRestore(true)
                        approveRequest()

                    }}
                >
                    Restore
                </Button>}

                {!restore && !remove && <Button type="submit" variant='contained'
                style={{
                    borderRadius:'15px',
                    backgroundColor:'black',
                    color:'white'
                }}
                    onClick={() => {
                        setRemove(true)
                        declineRequest()
                    }}
                >
                    Remove
                </Button>}

            </div>
            <div className='d-flex justify-content-end'
            >

                {restore && <div className='d-flex'
                    style={{
                        marginRight: '5%',
                        fontSize: '20px',
                        // marginTop: '5%',
                        color: 'rgba(58, 175, 160, 1)'
                    }}
                >
                    The Rating Has Been Restored</div>}

                {remove && <div className='d-flex'
                    style={{
                        marginRight: '5%',
                        // marginTop: '5%',
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: '20px',
                    }}

                >
                    The Rating Has Been Removed</div>}
            </div>


        </Card>
    );
}
export default ReportCard
