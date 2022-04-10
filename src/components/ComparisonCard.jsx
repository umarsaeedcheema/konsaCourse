import React from 'react'
import Grid from '@mui/material/Grid';
import Header from './Header';
import Content from './Content';



const ComparisonCard = () => {

    return (
        <div>
            <Grid container direction='column'>
                <Grid item>
                    <Header />
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

export default ComparisonCard