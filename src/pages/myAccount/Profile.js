import React, { useEffect, useState } from 'react'
import { Divider, Grid, Paper, makeStyles, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useAuthContext } from '../../contexts/AuthContext';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },

    paper2: {
        width: ' 66%',
        marginLeft: '82px'
    },
    h1: {
        textAlign: 'center'
    },
    grid: {
        padding: '5px'
    },
    grid_btn: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center'
    }

}));

export default function Profile() {
    const classes = useStyles();
    const [storedData, setStoredData] = useState({})

    useEffect(async () => {
        const data = await JSON.parse(localStorage.getItem('Profile Data'))
        setStoredData(data)
        console.log("storedData", data)
    }, [])


    return (
        <Paper elevation={6} className={classes.paper2} >
            <Grid className={classes.grid}>
                <h1 className={classes.h1}>Profile</h1>
                <Divider />
                <Grid container spacing={2} style={{ padding: '20px' }}>

                    <Grid item xs={4}>
                        First Name
                    </Grid>
                    <Grid item xs={8}>
                        {storedData.firstName}
                    </Grid>
                    <Grid item xs={4}>
                        Last Name
                    </Grid>
                    <Grid item xs={8}>
                        {storedData.lastName}
                    </Grid>
                    <Grid item xs={4}>
                        Gender
                    </Grid>
                    <Grid item xs={8}>
                        {storedData.gender}
                    </Grid>

                    <Grid item xs={4}>
                        Mobile Number
                    </Grid>
                    <Grid item xs={8}>
                        {storedData.mobile}
                    </Grid>
                    <Grid item xs={4}>
                        Email ID
                    </Grid>
                    <Grid item xs={8}>
                        {storedData.email}
                    </Grid>

                </Grid>
                <Divider />

                <Grid className={classes.grid_btn}>
                    <Button variant='outlined'><EditIcon />Edit</Button>
                </Grid>


            </Grid>
        </Paper>
    )
}
