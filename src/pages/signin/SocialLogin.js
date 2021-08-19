import React from 'react'
import {
    Button,
    TextField,
    Grid,
    makeStyles,
    Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
   container:{
       justifyContent: 'center',
       padding: 99
   }
}));

export default function SocialLogin() {
    const classes = useStyles();

    return (
            <Grid container spacing={3} className={classes.container}>
                <Grid item>
                    <Button className='btn_link' color='primary' variant='contained'>Login with google</Button>
                </Grid>
                <Grid item>
                    <Button className='btn_link' color='secondary' variant='contained'>Login with google</Button>
                </Grid>
                <Grid item>
                    <Button className='btn_link' color='primary' variant='contained'>Login with google</Button>
                </Grid>
            </Grid>
    )
}
