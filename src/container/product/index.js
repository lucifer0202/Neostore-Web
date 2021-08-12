import React from 'react'
import './style.css'
import { Grid, Typography, Paper } from '@material-ui/core'

export default function Product() {
    return (
        <Grid>
            <Grid className="split_left" style={{ backgroundColor: '#e68c8c' }}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper >xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>xs</Paper>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className="split_right">

            </Grid>
        </Grid>
    )
}
