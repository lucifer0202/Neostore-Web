import React, { useEffect, useState } from 'react'
import './style.css'
import { Grid, Button, CircularProgress } from '@material-ui/core'
import Sidebar from './Sidebar'
import List from './List'
import { ProductService } from '../../services/productServices';
import { useProductContext } from '../../contexts/ProductContext'
import { useQuery } from '../../utils/customHooks'
import PaginationList from './Pagination'
import Loader from '../../component/Loader'


export default function Product() {
    const { productState, setProductState } = useProductContext();
    const [isLoading, setIsLoading] = useState(false)
    let query = useQuery()

    useEffect(() => {
        getAllProduct()
    }, []);

    useEffect(() => {
        if (query.get('category')) {
            getAllProduct(`category=${query.get('category')}`)
        }
    }, [query.get('category')]);

    useEffect(() => {
        if (query.get('color')) {
            getAllProduct(`color=${query.get('color')}`)
        }
    }, [query.get('category')]);

    const getAllProduct = async (queryString) => {
        setIsLoading(true)
        try {
            setProductState({ ...productState, isLoading: true })

            const res = await ProductService.AllProductApi(queryString);

            if (res.data) {
                setProductState({ ...res.data, isLoading: false });
            }
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
            console.log(e.message);
        }
    };

    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <CircularProgress />
            </div>
        )
    }



    return (
        <Grid container >
            <Grid sm={2}>
                <Sidebar getAllProduct={getAllProduct} />
            </Grid>
            <Grid sm={10}>
                <List />
                <PaginationList getAllProduct={getAllProduct} />
            </Grid>

        </Grid>
    )
}
