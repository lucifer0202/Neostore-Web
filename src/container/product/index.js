import React, { useEffect, useState } from 'react'
import './style.css'
import { Grid, Button, Box } from '@material-ui/core'
import Sidebar from './Sidebar'
import List from './List'
import { ProductService } from '../../services/productServices';
import { useProductContext } from '../../contexts/ProductContext'


export default function Product() {
    const { productState, setProductState } = useProductContext();

    const getAllProduct = async () => {
        try {
            setProductState({...productState, isLoading: true})
            
            const res = await ProductService.fetchProduct();
            
            if(res.data){
                 setProductState({...res.data, isLoading: false});
            }
            console.log(res.data)

            
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <Grid container>
            <Grid sm={2}>
                <Sidebar getAllProduct={getAllProduct} />
            </Grid>
            <Grid sm={10}>
                <List/>
            </Grid>
        </Grid>
    )
}
