import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Table, Divider, IconButton } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid, Button, Paper, Typography } from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Logo from '../../assets/image2.jpg'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    table: {
        minWidth: 479,
    },
    btn: {
        width: '481px'
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
function createDate2(subtotal, gst, orderTotal) {
    return { subtotal, gst, orderTotal }
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),

];

export default function CartDetail() {
    const classes = useStyles();

    useEffect(() => {
        axios.get('/api/cart') //promise  

            .then(resp => {
                console.log("Cart Details", resp)

            })
            .catch(error => {
                console.error(error);
            })
    }, [])


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Cart</h4>

                <h4>Delivered</h4>
            </div>
            <Grid container >
                <Grid sm={7}>
                    <Paper style={{ width: '90%' }}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Price&nbsp;</TableCell>
                                        <TableCell align="right">Total&nbsp;</TableCell>
                                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row" style={{ display: 'flex' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <img style={{ width: '85px' }} src={Logo} />
                                                    </Grid>
                                                    <Grid item style={{ display: 'block' }}>
                                                        <div>
                                                            {row.name}
                                                        </div>
                                                        <div>
                                                            By: {row.name}
                                                        </div>
                                                        <div>
                                                            Status:  {row.name}
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right"> <IconButton><DeleteOutlineIcon /></IconButton></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid sm={5}>
                    <Paper elevation={6} style={{ width: '90%' }}>

                        <h1 style={{ textAligh: 'center' }}>Review Order</h1>
                        <Divider />
                        <List dense className={classes.root}>
                            {[0, 1, 2, 3].map((value) => {
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                    <ListItem key={value} button>

                                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                        <ListItemSecondaryAction>
                                            Rupee
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                );
                            })}
                            <Button variant='contained' color='primary' className={classes.btn} >Proceed To Buy</Button>
                        </List>

                    </Paper>
                </Grid>

            </Grid>
        </>
    );
}


