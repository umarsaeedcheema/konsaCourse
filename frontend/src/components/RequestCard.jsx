import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '../pages/styles.module.css'
import { useState } from 'react';
import { Button } from '@mui/material';



const RequestCard = (props) => {
    const [approve, setApprove] = useState(false);
    const [decline, setDecline] = useState(false);


    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#319FA025", borderRadius: "15px" }}>

            <CardContent>

                <div className='d-flex flex-row '
                    style={{
                        padding: '5px',
                    }} >
                    <div><Typography className='fw-bold '
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

                    >({props.coursecode})</Typography></div>
                    <div><Typography className='fw-bold'
                        style={{
                            margin: '5px',
                            fontSize: '30px'
                        }}
                    >-</Typography></div>

                    <p
                        style={{
                            margin: '5px',
                            fontSize: '30px'
                        }}
                    >{props.profname}</p>
                </div>

            </CardContent>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'end',
                    marginRight:'2%',
                    columnGap:'5px',
                    paddingBottom:'1%'
                }}
            >
                {!approve && !decline && <Button type="Button" variant='contained'
                style={{
                    borderRadius:'15px',
                   
                   
                }}
                    onClick={() => {
                        setApprove(true)
                    }}
                >
                    Approve
                </Button>}

                {!approve && !decline && <Button type="Button" variant='contained'
                style={{
                    borderRadius:'15px',
                    backgroundColor:'black',
                    color:'white'
                }}
                    onClick={() => {
                        setDecline(true)
                    }}
                >
                    Decline
                </Button>
                }


            </div>

            <div className='d-flex justify-content-end'
            >

                {approve && <div className='d-flex'
                    style={{
                        marginRight: '5%',
                        fontSize:'20px',
                        // marginTop: '5%',
                        color: 'rgba(58, 175, 160, 1)'
                    }}
                >
                    The Request Has Been Approved</div>}

                {decline && <div className='d-flex'
                    style={{
                        marginRight: '5%',
                        // marginTop: '5%',
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize:'20px',
                    }}

                >
                    The Request Has Been Declined</div>}
            </div>

        </Card>
    );
}
export default RequestCard
