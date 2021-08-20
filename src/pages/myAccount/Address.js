import React from 'react'
import { Divider, Grid, Paper, makeStyles, Button, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function Address() {
    return (
        <Paper>
            <Paper style={{padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between',}}>
                    <Typography>
                        Address
                    </Typography>
                    <Button variant='contained' color='secondary'><CloseIcon /></Button>
                </div>
                <Button variant='contained' color='primary'>Edit</Button>
            </Paper>
            <Divider />
            <Button style={{margin: '20px'}} variant='contained' >Add Address</Button>
        </Paper>
    )
}
