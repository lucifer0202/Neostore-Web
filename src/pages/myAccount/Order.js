import React from 'react'
import { Paper, Divider, Button, Grid, makeStyles } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import Logo from '../../assets/image2.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },

    paper2: {
        width: ' 86%',
        margin: '54px'
    },

}));
export default function Order() {
    const classes = useStyles();

    return (
        <Paper elevation={6} className={classes.paper2} >
            <Grid container spacing={3} style={{ display: 'block', padding: '28px' }}>
                <Grid item>
                    <h3>Transit Order by:</h3>
                    <h5>Posted on: </h5>
                </Grid>
                <Divider />
                <Grid item>
                    <img style={{ width: '166px' }} src={Logo} />
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Download Invoice as pdf
                </Button>
            </Grid>
        </Paper>

    )
}
