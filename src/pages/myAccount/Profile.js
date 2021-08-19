import React, { useEffect } from 'react'
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
        marginLeft: '131px'
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
    const { authState } = useAuthContext();

    console.log(authState)
    return (
        <Paper elevation={6} className={classes.paper2} >
            <Grid className={classes.grid}>
                <h1 className={classes.h1}>Profile</h1>
                <Divider />
                <Grid container spacing={8} style={{ padding: '20px' }}>

                    <Grid item sm={4}>
                        First Name
                    </Grid>
                    <Grid item sm={8}>
                        {/* {authState.firstName} */}
                    </Grid>
                    <Grid item sm={4}>
                        Last Name
                    </Grid>
                    <Grid item sm={8}>

                    </Grid>
                    <Grid item sm={4}>
                        Gender
                    </Grid>
                    <Grid item sm={8}>

                    </Grid>
                    <Grid item sm={4}>
                        Date of Birth
                    </Grid>
                    <Grid item sm={8}>

                    </Grid>
                    <Grid item sm={4}>
                        Mobile Number
                    </Grid>
                    <Grid item sm={8}>

                    </Grid>
                    <Grid item sm={4}>
                        Email ID
                    </Grid>
                    <Grid item sm={8}>
                        {authState.email}
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
