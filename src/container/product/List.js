import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import Logo from '../../assets/image2.jpg'
import { BiRupee } from 'react-icons/bi'

import { useProductContext } from '../../contexts/ProductContext'


export default function List({ }) {

    const [list, setList] = React.useState([]);

    const { productState } = useProductContext();

    React.useEffect(() => {
        if (productState.docs) {
            setList(productState.docs)
        }
        console.log(productState)
    }, [productState.docs])

    return (
        <Grid container spacing={3}>

            {
                list.map(item => {
                    return (
                        <Grid item key={item.id}>
                            <Paper elevation={15} style={{ height: '386px' }}>
                                <img style={{
                                    width: '93%',
                                    height:" 166px",
                                    margin:' 10px',
                                }} src={item.mainImage} />
                                <Grid container spacing={2} style={{ display: 'block', textAlign: 'center', padding: '24px' }}>
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
                                        <FaStar />

                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}
