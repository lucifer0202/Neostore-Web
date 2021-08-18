import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, makeStyles } from '@material-ui/core'
import ListWithCheckBoxItem from './ListWithCheckBoxItem';
import axios from 'axios'
import { useHistory } from 'react-router';

export default function ColorFilterd() {

    let history = useHistory()
     const [isColorListOpened, setIsColorListOpened] = useState(false);
    const [colorList, setColorList] = useState([]);

    useEffect(() => {
        axios.get('/api/color') //promise  
        .then(resp => {
                console.log("data", resp.data.data)
                setColorList(resp.data.data)

            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    const handleColorChange = (colorId) => {
            let search = `?color=${colorId}`
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
                onClick={() => setIsColorListOpened(prevalue => !prevalue)}>Colors</Button>
            {
                isColorListOpened && <ListWithCheckBoxItem list={colorList} handleChange={handleColorChange}/>
            }
        </Box>
    )
}
