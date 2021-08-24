import React, { useState } from 'react'
import { Grid, Paper, Button, Typography, Box } from '@material-ui/core'

import { BiRupee } from 'react-icons/bi'
import Rating from '@material-ui/lab/Rating';
import { useAuthContext } from '../../contexts/AuthContext';
import { CartServices } from '../../services/cardServices'
import { AuthService } from '../../services/authServices';
import { useHistory } from 'react-router-dom'
import Loader from '../../component/Loader'

export default function ProductCard({ item }) {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)


  const handleCardClick = (itemId) => {
    history.push(`/productDetail?product=${itemId}`)
  }
  const handleCartClick = (event, product) => {
    event.stopPropagation()
    if (AuthService.getAccessToken()) {
      // history.push('/cartList')
      setIsLoading(true)
      CartServices.addToCartApi({ quantity: 1, productId: product.id })
        .then(res => {
          console.log('--->>>>res', res)
          setIsLoading(false)
        })
        .catch(error => {
          setIsLoading(false)
          console.log('Error--->>>>error', error)
        })
    }
    else {
      history.push(`/signin?ref=cartList`)
    }
  }

  return (
    <>
      <Loader
       isLoading={isLoading} />
      <Paper
        key={item.id}
        elevation={15}
         style={{ height: 400, width: 300, cursor: 'pointer' }}
        onClick={() => handleCardClick(item.id)} >

        <img
         style={{
          width: '93%',
          height: "166px",
          margin: '10px',
        }}
         src={item.mainImage} />
        <Grid 
        container
         spacing={1}
          style={{ display: 'block', textAlign: 'center', padding: '24px' }}>
          <Grid item>
            <Typography
             style={{ color: 'blue', fontWeight: 'bold', width: '280px' }}>
               {item.name} 
               </Typography>
          </Grid>
          <Grid item >
            <Typography >{item.price} <BiRupee /></Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' color='secondary'
              onClick={(event) => handleCartClick(event, item)}> Add To Cart</Button>

          </Grid>
          <Grid item>
            <Rating
              name="simple-controlled"
              value={item.avgRating}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
