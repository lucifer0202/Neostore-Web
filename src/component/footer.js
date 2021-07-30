import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Grid, Typography } from '@material-ui/core';
import MainModal from './mainModal';

export default function Footer() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{
            // position: 'fixed',
            // bottom: '0',
            width: '100%',
        }}>
            <div position="static" style={{ background: '#9e9e9e' }}>


                <Grid container spacing={4} style={{ justifyContent: 'space-around', padding: '28px' }}>
                    <Grid item >
                        <Typography variant="body1" color="inherit" style={{ margin: 'revert' }}>
                            About Company
                        </Typography>
                        <Typography variant="body1" color="inherit" style={{ margin: 'revert' }}>
                            <a href="https://dr6j45jk9xcmk.cloudfront.net/documents/435/medi-booklet-e-commerce-accessible-e-final.pdf"
                                target="_blank">Terms And Conditions</a>
                        </Typography>
                        <Typography variant="body1" color="inherit" style={{ margin: 'revert' }}>
                            <a href="https://www.google.co.in/maps/@28.0200723,79.1435639,15z"
                                target="_blank">Locate Us</a>
                        </Typography>
                        <Typography variant="body1" color="inherit" onClick={handleOpen}>
                            Subscription
                        </Typography>
                        {
                            open && <MainModal open={open} />
                        }
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" color="inherit">
                            Information
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" color="inherit">
                            Newsletter
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
