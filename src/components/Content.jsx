import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#319FA025", borderRadius: "15px" }}>

            <CardContent>
                <Typography gutterBottom variant='h5'>
                    Overall Rating:
                </Typography>
                <Typography >
                    Teaching Rating:
                </Typography>
                <Typography >
                    Quality1 Rating:
                </Typography>
                <Typography >
                    Quality2 Rating:
                </Typography>
                <Typography >
                    Quality3 Rating:
                </Typography>
            </CardContent>
            <div>
                <Typography style={{ paddingLeft: 15, fontSize: 20 }}>
                    Top Five Tags:
                </Typography>
                <Button disabled style={{ backgroundColor: "#000000", marginTop: 20, marginLeft: 10, borderRadius: "15px", marginBottom: "10px", color: "#FFFFFF" }}>Lenient</Button>
                <Button disabled style={{ backgroundColor: "#000000", marginTop: 20, marginLeft: 10, borderRadius: "15px", marginBottom: "10px", color: "#FFFFFF" }}>Accomodating</Button>
                <Button disabled style={{ backgroundColor: "#000000", marginTop: 20, marginLeft: 10, borderRadius: "15px", marginBottom: "10px", color: "#FFFFFF" }}>Punctual</Button>
                <Button disabled style={{ backgroundColor: "#000000", marginTop: 20, marginLeft: 10, borderRadius: "15px", marginBottom: "10px", color: "#FFFFFF" }}>Lenient</Button>
                <Button disabled style={{ backgroundColor: "#000000", marginTop: 20, marginLeft: 10, borderRadius: "15px", marginBottom: "10px", color: "#FFFFFF" }}>Interactive</Button>
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
                        title="Shafay Shamail"
                    >
                    </CardHeader>
                    <BasicCard />
                </Grid>
                <Grid item xs={6} style={{ marginTop: 20 }} >
                    <CardHeader style={{ backgroundColor: "#319FA025", borderRadius: "15px", marginBottom: 10, textAlign: 'center' }}
                        title="Shafay Shamail"
                    >
                    </CardHeader>
                    <BasicCard />
                </Grid>
            </Grid>

        </>

    )
}

export default Content