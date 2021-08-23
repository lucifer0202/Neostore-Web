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
import Checkbox from '@material-ui/core/Checkbox';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { CartServices } from '../../services/cardServices'
import Loader from '../../component/Loader'
import { OrderServices } from '../../services/orderServices';
import { useAddressContext } from '../../contexts/AddressContext';
import BuyModal from './BuyModal';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    table: {
        minWidth: 479,
    }
});


export default function CartDetail() {
    const classes = useStyles();
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [subTotal, setSubTotal] = useState('')
    const [isModalOpened, setIsModalOpened] = useState(false)

    const { addressState } = useAddressContext()

    useEffect(() => {
        setIsLoading(true)
        CartServices.getCartApi()
            .then(resp => {
                setList(resp.data.products)
                setSubTotal(resp.data.grandTotal)
                console.log(resp.data.products.length)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })
    }, [])

    const handleRemoveProductFromCart = (productId) => {
        setIsLoading(true)
        CartServices.deleteCartApi(productId)
            .then(resp => {
                console.log("Delete Cart", resp.data.products)
                setIsLoading(false)

            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })
    }

    const handleSaveOrder = () => {
        setIsLoading(true)
        OrderServices.addOrderApi({ addressId: addressState.addressId })
            .then(resp => {
                console.log('--->>>>res', resp.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })
    }
    const toggleBuyButton = () => {
        setIsModalOpened(!isModalOpened)
    }


    return (
        <>
            <Loader isLoading={isLoading} />
            {isModalOpened &&
                <BuyModal isModalOpened={isModalOpened}
                    toggleBuyButton={toggleBuyButton} />
            }

            <Grid container spacing={2} style={{ padding: '20px' }}>
                <Grid xs={8}>
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
                                            <TableCell align="right"> <IconButton onClick={() => handleRemoveProductFromCart(row.productId.id)}><DeleteOutlineIcon /></IconButton></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid xs={4}>
                    <Paper elevation={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '10px',background: '#f4b74a' }}>

                        <h4 style={{ textAligh: 'center' }}>Review Order</h4>
                        <Divider />
                        <Typography paragraph={true} >
                            SubTotal:{subTotal}
                            <List>
                                <ListItem role={undefined} dense button >
                                   
                                        <Checkbox
                                            edge="start"
                                        />
                                      This order contains a gift.
                                    </ListItem>
                                </List>
                        </Typography>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={toggleBuyButton} >Proceed To Buy</Button>

                    </Paper>
                </Grid>

                </Grid>
        </>
            );
}


