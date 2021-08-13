import React from 'react'
import { Box, Button, Paper, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    button: {
        marginTop: '7px'
    }
}));


export default function Sidebar({getAllProduct}) {
    const classes = useStyles();
   

    return (
        <Paper elevation={4} className={classes.paper}>
            <Box className={classes.box}>
                <Button className={classes.button} onClick={getAllProduct} variant='outlined'>All Products</Button>
                <Button className={classes.button} variant='outlined'>Categories</Button>
                <Button className={classes.button} variant='outlined'>Colors</Button>
            </Box>
        </Paper>
    )
}
