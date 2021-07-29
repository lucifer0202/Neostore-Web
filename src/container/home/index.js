import React, { useContext, useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid, Paper, Button, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/amazonLogo.jpg'
import Image from '../../assets/image1.jpeg'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexbox: 1,
        // display: 'inline-grid',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: "auto",
            height: 'auto',
        },

    },
}))
export default function Home() {
    const classes = useStyles();
    const history = useHistory();

    const handleBackbutton = () => {
        history.goBack()
    }
    return (
        <div className={classes.root}>
            <Grid style={{height: '30%'}}>
                <img src={Image} style={{width: '100%', height: '200px'}}></img>

            </Grid>
            <Paper elevation={15} style={{ height: '320px' , width: '20%'}}>
                <Grid item>
                    <Grid style={{ margin: '30px' }}> <img style={{ width: '100px' }} src={Logo} />
                        <Grid >
                            <Typography>Name </Typography>
                        </Grid>

                        <Grid container margin='20px'>

                            <Grid item style={{ margin: '10px' }}>
                                <Input multiline variant='outlined' placeholder='Write your Feedback here..' />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='secondary'> Add To Cart</Button>

                        </Grid>

                    </Grid>

                </Grid>

            </Paper>
        </div>
    )
}