import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BasicMenu from './BasicMenu';




const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography style={{ flex: "1" }}> KonsaCourse</Typography>
                <BasicMenu></BasicMenu>
            </Toolbar>
        </AppBar>
    )
}

export default Header