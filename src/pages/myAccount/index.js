import React, { useState } from 'react';
import { makeStyles, Grid, Paper, Typography, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from "../../assets/image2.jpg"
import Avatar from '@material-ui/core/Avatar';
import Order from './Order';
import Profile from './Profile'
import Address from './Address';
import ViewListIcon from '@material-ui/icons/ViewList';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { FormatColorResetRounded } from '@material-ui/icons';
import ChangedPassword from './ChangePassword'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    large: {
        width: 345,
        height: 343,
        margin: 'auto'
    },
    paper: {
        padding: 48,
    },
    container: {
        margin: '22px'
    }


}));


export default function MyAccount() {
    const classes = useStyles();

    const [isOrderOpened, setIsOrderOpened] = useState(false)
    const [isProfileOpened, setIsProfileOpened] = useState(false)
    const [isAddressOpened, setIsAddressOpened] = useState(false)
    const [isPasswordOpened, setIsPasswordOpened] = useState(false)

    const handleOrderClick = () => {
        setIsOrderOpened(!isOrderOpened)
        setIsProfileOpened(false)
        setIsAddressOpened(false)
        setIsPasswordOpened(false)
    }
    const handleProfileClick = () => {
        setIsProfileOpened(!isProfileOpened)
        setIsOrderOpened(false)
        setIsAddressOpened(false)
        setIsPasswordOpened(false)
    }
    const handleAddressClick = () => {
        setIsAddressOpened(!isAddressOpened)
        setIsOrderOpened(false)
        setIsProfileOpened(false)
        setIsPasswordOpened(false)
    }
    const handlePasswordClick = () => {
        setIsPasswordOpened(!isPasswordOpened)
        setIsAddressOpened(false)
        setIsOrderOpened(false)
        setIsProfileOpened(false)

    }

    return (
        <>
            <h2>My Accounts</h2>
            <Divider />
            <Grid container spacing={3} className={classes.container}>
                <Grid sm={4}>
                    <Paper elevation={6} className={classes.paper}>
                        <Grid container spacing={2} style={{ justifyContent: 'center' }}>
                            <Grid item>
                                <Avatar alt="Remy Sharp" src={Logo} className={classes.large} />
                                <Typography> <h3>Name</h3></Typography>
                            </Grid>
                          
                        </Grid>



                        <List
                            component="nav"
                            className={classes.root}
                        >
                            <Grid container style={{ display: 'block' }}>
                                <Grid item>
                                    <ListItem button onClick={handleOrderClick}>
                                        <ListItemIcon>
                                            <ViewListIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Order" />
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem button onClick={handleProfileClick}>
                                        <ListItemIcon>
                                            <PersonOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Profile" />
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem button onClick={handleAddressClick}>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Address" />
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem button onClick={handlePasswordClick}>
                                        <ListItemIcon>
                                            <VpnKeyIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Change Password" />
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </List>


                    </Paper>
                </Grid>
                <Grid sm={7}>

                    {isOrderOpened && <Order />}
                    {isProfileOpened && <Profile />}
                    {isAddressOpened && <Address />}
                    {isPasswordOpened && <ChangedPassword />}


                </Grid>
            </Grid>
        </>
    )
}

