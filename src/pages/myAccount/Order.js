import React, { useState, useEffect } from 'react'
import { Paper, Divider, Button, Grid, makeStyles } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import Logo from '../../assets/image2.jpg'
import { OrderServices } from '../../services/orderServices';
import Loader from '../../component/Loader';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },

    paper2: {
        width: ' 86%',
        margin: '14px'
    },

}));
export default function Order() {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])
    const [storedData, setStoredData] = useState({})
    const [listItem, setListItem] = useState([])

    useEffect(() => {

        setIsLoading(true)
        OrderServices.getOrderApi()
            .then(resp => {
                console.log('--->>>>res', resp.data.orders)
                setList(resp.data.orders)
                // setListItem(resp.data.orders.items)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })
    }, [])

    useEffect(async () => {
        const data = await JSON.parse(localStorage.getItem('Profile Data'))
        setStoredData(data)
        console.log("storedData", data)
    }, [])


    if (isLoading) {
        return (
            <Loader isLoading={isLoading} />
        )
    }
    return (
        <Paper elevation={6} className={classes.paper2} >
            {
                list.map(order => {
                    // console.log("single Item", item)
                    return (
                        <Grid container spacing={3}
                            key={order.id}
                            style={{ display: 'block', padding: '28px' }}>

                            <Grid item>
                                <h3>Transit Order by: {storedData.firstName} {storedData.lastName}</h3>
                                <h5>Posted on:{order.createdAt} </h5>
                            </Grid>
                            <Divider />
                            {order.items.map(product => {
                                return (
                                    <div style={{ display: 'flex' }}>
                                        <Grid item>
                                            <Grid container  spacing={6}>
                                                <Grid item >
                                                    <img style={{ width: '166px' }} src={product.productId.mainImage} />
                                                </Grid>
                                                <Grid item>
                                                    <h3>{product.productId.name}</h3>
                                                    <h4>Price: {product.productId.price}</h4>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </div>
                                )
                            })}

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
                    )
                })}
        </Paper>

    )
}
