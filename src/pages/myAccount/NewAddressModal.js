import React, { useState ,useEffect} from 'react'
import { Divider, Grid, Paper, makeStyles, Button, Typography, IconButton } from '@material-ui/core';
import MainModal from '../../component/mainModal'
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
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
export default function NewAddressModal({ handleAddressToggle, isModalOpened }) {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false)
    const [addressLine, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [addressError, setAddressError] = useState(false)

    const handleAddressInput = (e) => {
        if ((e.target.value).length > 10) {
            setAddressError(false)
        }
        else {
            setAddressError(true)
        }
        setAddress(e.target.value)
    }
    const handleSaveAddress = () => {
        setIsLoading(true)
        AddressServices.addNewAddressApi({ addressLine: addressLine, pincode: pincode, city: city, state: state, country: country })
            .then(resp => {
                console.log('--->>>>res', resp.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })
    }

    return (
        <>
            <Loader isLoading={isLoading} />
            <MainModal open={isModalOpened} toggleModal={handleAddressToggle}>
                <Paper>
                    <h3>Add New Address</h3>
                    <form className={classes.root} noValidate autoComplete="off" style={{ display: 'grid' }} onSubmit={handleSaveAddress}>

                        <TextField
                            label="Address"
                            value={addressLine}
                            variant="outlined"
                            multiline
                            error={addressError}
                            helperText={addressError ? "Incorrect entry." : ''}
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
                            <Button variant='contained' color='primary' onClick={handleSaveAddress} ><SaveIcon />Save</Button>
                            <Button variant='contained' color='secondary'><CloseIcon />Cancel</Button>
                        </div>
                    </form>
                </Paper>
            </MainModal>
        </>
    )
}


