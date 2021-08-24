import React, { useEffect, useState } from 'react'
import { Grid} from '@material-ui/core'


import { useProductContext } from '../../contexts/ProductContext'

import ProductCard from '../../container/ProductCard/index';

export default function ListView({ }) {

  const [list, setList] = React.useState([{}]);

  const { productState } = useProductContext();

  React.useEffect(() => {
    if (productState.docs) {
      setList(productState.docs)
    }
  }, [productState.docs])


  return (
    <Grid container spacing={2}>
      {
        list.map(item => {
          return (
            <Grid item>
              <ProductCard item={item} />
            </Grid>
          )
        })
      }
    </Grid>

  )
}
