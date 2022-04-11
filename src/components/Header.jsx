import { AppBar, ListItem, ListItemText, makeStyles, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { List } from '@mui/material';
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