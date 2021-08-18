import React, { useState } from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import MainModal from '../mainModal'
import './style.css'

export default function Footer() {

    const [isModalOpened, setIsModalOpened] = useState(false)
    const toggleModal = () => {
        setIsModalOpened(!isModalOpened)
    }
    return (
        <>
            {isModalOpened &&
                <MainModal
                    toggleModal={toggleModal}
                    isModalOpened={isModalOpened}
                />
            }
            <Grid container spacing={4} className='footer'>
                <Grid item >
                    <Typography variant="body1" color="inherit" style={{ fontWeight: 'bold' }}>
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
                    <Typography variant="body1" color="inherit" style={{ margin: 'revert', cursor: 'pointer' }} onClick={toggleModal}>
                        <a>Subscription</a>
                    </Typography>

                </Grid>
                <Grid item>
                    <Typography variant="body1" color="inherit" style={{ fontWeight: 'bold' }}>
                        Information
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" color="inherit" style={{ fontWeight: 'bold' }}>
                        Newsletter
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
