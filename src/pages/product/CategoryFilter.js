import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, makeStyles, CircularProgress } from '@material-ui/core'
import ListWithCheckBoxItem from './ListWithCheckBoxItem';
import axios from 'axios'
import { useHistory } from 'react-router';

export default function ColorFilter() {
    const [isCategoryListOpened, setIsCategoryListOpened] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory()

    useEffect(() => {
        axios.get('/api/category') //promise  
        
            .then(resp => {
                console.log("data", resp.data.data)
                setCategoryList(resp.data.data)
                // setIsLoading(true)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const handleCategorychange = (categoryId) => {
        let search = `?category=${categoryId}`
        history.push({
            pathname: `/product`,
            search
        })
    }

    return (
        <Box>
            
            <Button
                // className={classes.button} 
                variant='outlined'
                onClick={() => setIsCategoryListOpened(prevalue => !prevalue)}>Category</Button>
            {
                isCategoryListOpened && <ListWithCheckBoxItem list={categoryList} handleChange={handleCategorychange} />
            }

        </Box>
    )
}
