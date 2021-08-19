import React, { useEffect, useState } from 'react'
import { Grid, Paper, Button, Typography, Box } from '@material-ui/core'


import { useProductContext } from '../../contexts/ProductContext'

import ProductCard from '../../container/ProductCard/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


export default function ListView({ }) {

  const [list, setList] = React.useState([{}]);

  const { productState } = useProductContext();

  React.useEffect(() => {
    if (productState.docs) {
      setList(productState.docs)
    }
  }, [productState.docs])


  return (
    <List>

      {
        list.map(item => {
          return (
            <ListItem>
              <ProductCard item={item} />

            </ListItem>
          )
        })
      }
    </List>

  )
}
