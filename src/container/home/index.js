import React, { useContext, useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid, Paper, Button, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/amazonLogo.jpg'
import Image from '../../assets/image1.jpeg'
import { useHistory } from "react-router-dom";
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';


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

    const cardArray = ['1', '2', '3', '4', '5', '6']
    return (
        <div className={classes.root}>
            <Grid style={{ height: '30%' }}>
                <img src={Image} style={{ width: '100%', height: '200px' }}></img>

            </Grid>

            <Grid container spacing={3}>

                {
                    cardArray.map(card => {
                        return (
                            <Grid item>
                                <Paper elevation={15} style={{ height: '386px' }}>
                                    <img style={{ width: '271px', height: '166px' }} src={Logo} />
                                    <Grid container style={{ margin: '30px', display: 'block' }}>
                                        <Grid item>
                                            {/* <Typography>Name </Typography> */}
                                        </Grid>
                                        <Grid item style={{ margin: '10px' }}>
                                            <Input multiline variant='outlined' placeholder='Write your Feedback here..' />
                                        </Grid>

                                    </Grid>
                                    <Grid style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant='contained' color='secondary'> Add To Cart</Button>

                                    </Grid>
                                    <Grid  style={{ display: 'flex', justifyContent: 'center' }}>
                                        <StarOutlineRoundedIcon />
                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </div>
    )
}