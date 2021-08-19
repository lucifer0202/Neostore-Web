import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { AiFillGoogleCircle } from 'react-icons/ai';
import TwitterIcon from '@material-ui/icons/Twitter';
import DescriptionTab from './DescriptionTab'
import { useHistory } from 'react-router';
import axios from 'axios';

import { Paper, Grid, Divider, Button } from '@material-ui/core';
import Logo from '../../assets/image4.png'
import './style.css'
import { useProductContext } from '../../contexts/ProductContext';
import { useQuery } from '../../utils/customHooks';
import { useAuthContext } from '../../contexts/AuthContext';

export default function ProductDetail() {

    const history = useHistory()
    const [value, setValue] = React.useState(2);
    const { productState } = useProductContext();
    const [productValue, setProductValue] = useState({});
    const { authState } = useAuthContext()

    const query = useQuery();

    useEffect(() => {
        if (productState.docs) {
            const data = productState.docs.find(item => item.id === query.get('product'))
            setProductValue(data)
            console.log("productDetails", data)
        }
    }, [query, productState.docs])

    useEffect(() => {
        if (authState.user) {
            axios.get('/api/cart') 
                .then(resp => {
                    console.log("Cart Details", resp.data)

                })
                .catch(error => {
                    console.error(error);
                })
        }

    }, [authState.user])
    const handleCartClick = () => {
        if (authState.user) {
            history.push('/cartList')
        }
        else {
            history.push(`/signin?ref=cartList`)
        }
    }


    return (
        <>
            {Object.keys(productValue).length > 0 &&


                <div key={productValue.id}>
                    <Grid container spacing={3} style={{ display: 'flex' }}>
                        <Grid item xs={6} >
                            <img src={Logo} width="400" height="400" className='responsive'></img>

                        </Grid>
                        <Divider />
                        <Grid item xs={6}>
                            <h1>{productValue.name}</h1>
                            <Rating
                                name="simple-controlled"
                                value={productValue.avgRating}
                            />
                            <Divider />
                            <h3>Price: {productValue.price}</h3>
                            <h3>Color: {productValue.color.name}</h3>
                            <div>
                                <h3>Share</h3><ShareIcon />
                            </div>
                            <Grid item style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Button style={{ borderRadius: '34px', background: 'blue' }}><FacebookIcon fontSize='large' style={{ color: 'white' }} /></Button>
                                <Button style={{ borderRadius: '34px', background: '#e53b3b' }}><TwitterIcon fontSize='large' style={{ color: 'white' }} /></Button>
                                <Button style={{ borderRadius: '34px', background: '#82ba81' }}><WhatsAppIcon fontSize='large' style={{ color: 'white' }} /></Button>
                                <Button style={{ borderRadius: '34px', background: '#d16ac9' }}><PinterestIcon fontSize='large' style={{ color: 'white' }} /></Button>
                                <Button><AiFillGoogleCircle /></Button>
                            </Grid>
                            <Grid item style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
                                <Button variant="contained" color="primary" onClick={handleCartClick}>
                                    Add to card
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Rate Product
                                </Button>
                            </Grid>
                        </Grid>

                        <Paper elevation={6}>
                            <img style={{ width: '200px', margin: ' 10px' }} src={Logo}></img>

                            <img style={{ width: '200px', margin: ' 10px' }} src={Logo}></img>

                            <img style={{ width: '200px', margin: ' 10px' }} src={Logo}></img>

                            <DescriptionTab
                                description={productValue.description}
                                features={productValue.features}
                            />
                        </Paper>
                    </Grid>
                </div>
            }

        </>
    );
}
