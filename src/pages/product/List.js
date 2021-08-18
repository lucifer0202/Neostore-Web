import React, { useState } from 'react'
import { Grid, Paper, Button, Typography, Box } from '@material-ui/core'
import { BiRupee } from 'react-icons/bi'
import Rating from '@material-ui/lab/Rating';
import {useHistory} from 'react-router-dom'

import { useProductContext } from '../../contexts/ProductContext'


export default function List({ }) {
    const history = useHistory()

    const [list, setList] = React.useState([]);

    const { productState, categoryState } = useProductContext();

    React.useEffect(() => {
        if (productState.docs) {
            setList(productState.docs)
        }
    }, [productState.docs])

    const handleCardClick = () => {
        history.push('/productDetail')
    }

    return (
        <>
            <Grid container spacing={3} style={{padding: '20px'}}>

                {
                    list.map(item => {
                        return (
                            <Grid item key={item.id}>
                                <Paper elevation={15} style={{ height: '386px' }} onClick = {handleCardClick} >
                                    <img style={{
                                        width: '93%',
                                        height: " 166px",
                                        margin: ' 10px',
                                    }} src={item.mainImage} />
                                    <Grid container spacing={1} style={{ display: 'block', textAlign: 'center', padding: '24px' }}>
                                        <Grid item>
                                            <Typography multiline style={{ color: 'blue', fontWeight: 'bold', width: '280px' }}>{item.name} </Typography>
                                        </Grid>
                                        <Grid item >
                                            <Typography >{item.price} <BiRupee /></Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button variant='contained' color='secondary'> Add To Cart</Button>

                                        </Grid>
                                        <Grid item>
                                            <Rating
                                                name="simple-controlled"
                                                value={item.avgRating}
                                            />
                                        </Grid>
                                    </Grid>
                                </Paper>

                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
