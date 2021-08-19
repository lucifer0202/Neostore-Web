import React, { useEffect, useState } from 'react'
import { Typography, Grid, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/image1.jpeg'
import Loader from '../../component/Loader';
import { ProductService } from '../../services/productServices';
import ProductCard from '../../container/ProductCard/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  productList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    display: 'flex',
    flexDirection: 'row',
    overflowY: 'scroll'
  },
}))


export default function Home() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllProduct()
  }, []);


  const getAllProduct = async (queryString) => {
    setIsLoading(true)
    try {

      const res = await ProductService.AllProductApi(queryString);

      if (res.data) {
        setProductList(res.data.docs)
      }
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e.message);
    }
  };

  return (
    <div className={classes.root}>
      <Loader isLoading={isLoading} />
      <img src={Image} style={{ width: '100%', height: '200px' }}></img>

      <List className={classes.productList}>
        {
          productList.map(product => (
            <ListItem>
              <ProductCard item={product} />
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}