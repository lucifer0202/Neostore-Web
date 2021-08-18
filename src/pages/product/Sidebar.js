import React, {useEffect, useState} from 'react'
import { Box, Button, Paper, makeStyles } from '@material-ui/core'
import ListWithCheckBoxItem from './ListWithCheckBoxItem';
import ColorFilterd from './ColorFilterd';
import CategoryFilter from './CategoryFilter'
import { useHistory } from 'react-router';

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


export default function Sidebar({ getAllProduct }) {
    const classes = useStyles();
    let history = useHistory()
    const handleAllProductClick = () => {
        history.push('/product')
        getAllProduct()
    }
    return (
        <Paper elevation={4} className={classes.paper}>
            <Box className={classes.box}>
                <Button className={classes.button} onClick={handleAllProductClick} variant='outlined'>All Products</Button>
                <CategoryFilter />
                <ColorFilterd/>
            </Box>
            
        </Paper>
    )
}
