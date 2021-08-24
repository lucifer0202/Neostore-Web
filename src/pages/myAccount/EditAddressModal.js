import React, { useState, useEffect } from 'react'
import { Divider, Grid, Paper, makeStyles, Button, TextField, IconButton } from '@material-ui/core';
import MainModal from '../../component/mainModal'
import Loader from '../../component/Loader'
import { AddressServices } from '../../services/addressServices';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function EditAddressModal({
    toggleUpdateAddress,
    isEditModalOpened,
    selectedAddress }) {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false)
    const [addressLine, setAddress] = useState(selectedAddress.addressLine)
    const [pincode, setPincode] = useState(selectedAddress.pincode)
    const [city, setCity] = useState(selectedAddress.city)
    const [state, setState] = useState(selectedAddress.state)
    const [country, setCountry] = useState(selectedAddress.country)
    const [list, setList] = useState({})

    useEffect(() => {
        console.log("Current Selected address", selectedAddress)
    }, [])
    const handleAddressInput = (e) => {
        setAddress(selectedAddress.addressLine)
    }
    const handleSaveAddress = () => {
        toggleUpdateAddress(selectedAddress._id, { addressLine, pincode, city, state, country })
    }

    return (
        <>
            <Loader isLoading={isLoading} />
            <MainModal open={isEditModalOpened} toggleModal={toggleUpdateAddress}>
                <Paper style={{ padding: '35px' }}>
                    <h3>Update Address</h3>
                    <form className={classes.root} noValidate autoComplete="off" style={{ display: 'grid' }}>

                        <TextField
                            label="Address"
                            value={addressLine}
                            variant="outlined"
                            multiline
                            onChange={handleAddressInput}
                        />
                        <TextField
                            label="Pin Code"
                            value={pincode}
                            variant="outlined"
                            onChange={(e) => setPincode(e.target.value)}
                        />
                        <TextField
                            label="City"
                            value={city}
                            variant="outlined"
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <TextField
                            label="State"
                            value={state}
                            variant="outlined"
                            onChange={(e) => setState(e.target.value)}
                        />
                        <TextField
                            label="Country"
                            value={country}
                            variant="outlined"
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <div style={{ justifyContent: 'space-around', display: 'flex' }}>
                            <Button variant='contained' color='primary' onClick={handleSaveAddress} >Save</Button>
                            <Button variant='contained' color='secondary'>Cancel</Button>
                        </div>
                    </form>
                </Paper>
            </MainModal>

        </>
    )
}


