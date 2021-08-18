import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import './style.css'
import { useProductContext } from '../../contexts/ProductContext';

export default function PaginationList({getAllProduct}) {

    const { productState } = useProductContext()
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        getAllProduct(`page=${value}`)
        
    };

    React.useEffect(() => {
        if (productState.docs) {
            setPage(productState.page)
        }
    }, [productState.page])

    return (
        <Paper elevation={6} className='paper'>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination count={productState.pages} page={page} onChange={handleChange} size="large" color="primary" />
        </Paper>
    );
}

