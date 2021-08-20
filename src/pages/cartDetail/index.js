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
import { CartServices } from '../../services/cardServices'

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    table: {
        minWidth: 479,
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
    const [list, setList] = useState([])

    useEffect(() => {
        CartServices.getCartApi()
            .then(resp => {
                console.log("Cart Details", resp.data.products)
                setList(resp.data.products)

            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const deleteCart = (row) => {
      
        CartServices.deleteCartApi()
        
            .then(resp => {
                console.log("Delete Cart", resp.data.products.productId)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Cart</h4>
                <h4>Delivered</h4>
            </div>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Paper>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Price&nbsp;</TableCell>
                                        <TableCell align="right">Total&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {list.map((row) => (
                                        <TableRow key={row.productId}>
                                            <TableCell component="th" scope="row" style={{ display: 'flex' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <img style={{ width: '85px' }} src={row.productId.mainImage} />
                                                    </Grid>
                                                    <Grid item style={{ display: 'block' }}>
                                                        <div>
                                                            {row.productId.name}
                                                        </div>
                                                        <div>
                                                            By:
                                                        </div>
                                                        <div>
                                                            Status:  {row.name}
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                            <TableCell align="right">{row.productId.price}</TableCell>
                                            <TableCell align="right">{row.totalAmount}</TableCell>
                                            <TableCell align="right"> <IconButton onClick={() => deleteCart(row.productId.id)}><DeleteOutlineIcon /></IconButton></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid xs={6}>
                    <Paper elevation={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}>

                        <h4 style={{ textAligh: 'center' }}>Review Order</h4>
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
                        </List>
                        <Button variant='contained' color='primary' >Proceed To Buy</Button>

                    </Paper>
                </Grid>

            </Grid>
        </>
    );
}


