import React from 'react';
import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { AiFillGoogleCircle } from 'react-icons/ai';
import TwitterIcon from '@material-ui/icons/Twitter';
import DescriptionTab from './DescriptionTab'

import { Paper, Grid, Divider, Button } from '@material-ui/core';
import Logo from '../../assets/image4.png'
import './style.css'


export default function ProductDetail() {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <Grid container spacing={6} style={{ display: 'flex' }}>
                <Grid item xs={6}>
                    <img src={Logo} width="400" height="400" className='responsive'></img>

                </Grid>
                <Divider />
                <Grid item xs={6}>
                    <h1>Sofa</h1>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <Divider />
                    <h3>Price:</h3>
                    <h3>Color:</h3>
                    <div>
                        <h3>Share</h3><ShareIcon />
                    </div>
                    <Grid item style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button style={{ borderRadius: '34px', background: 'blue' }}><FacebookIcon fontSize='large' style={{ color: 'white' }} /></Button>
                        <Button style={{ borderRadius: '34px', background: '#e53b3b' }}><TwitterIcon fontSize='large' style={{ color: 'white' }} /></Button>
                        <Button style={{ borderRadius: '34px', background: '#82ba81' }}><WhatsAppIcon fontSize='large' style={{ color: 'white' }} /></Button>
                        <Button style={{ borderRadius: '34px', background: '#d16ac9' }}><PinterestIcon fontSize='large' style={{ color: 'white' }} /></Button>
                        <Button><AiFillGoogleCircle /></Button>
                    </Grid>
                    <Grid item style={{marginTop: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
                        <Button variant="contained" color="primary">
                            Add to card
                        </Button>
                        <Button variant="contained" color="secondary">
                            Rate Product
                        </Button>
                    </Grid>
                </Grid>
                    
                        <Paper elevation={6}>
                            <img style={{ width: '200px', margin: ' 10px' }} src={Logo}></img>

                            <img style={{ width: '200px', margin: ' 10px' }} src={Logo}></img>

                            <img style={{ width: '200px', margin: ' 10px' }} src={Logo}></img>

                            <DescriptionTab />
                        </Paper>
                    
            </Grid>

        </>
    );
}
