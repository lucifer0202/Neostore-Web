import React, { useState, useEffect } from 'react'
import { Divider, Grid, Paper, makeStyles, Button, div, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import NewAddressModal from './NewAddressModal';
import { AddressServices } from '../../services/addressServices';
import Loader from '../../component/Loader'

export default function Address() {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])

    const handleAddressToggle = () => {
        setIsModalOpened(!isModalOpened)
    }
    useEffect(() => {
        setIsLoading(true)
        AddressServices.getNewAddressApi()
            .then(resp => {
                console.log("get address", resp.data)
                setList(resp.data.address)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })
    }, [])

    const handleUpdateAddress = (addressLine, pincode, city, state, country) => {
        setIsLoading(true)
        AddressServices.UpdateAddressApi(JSON.stringify({
            addressLine: addressLine,
            pincode: pincode,
            city: city,
            state: state,
            country: country
        }))
            .then(resp => {
                console.log("update address", resp.data.address)
                setList(resp.data.address)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })
    }
    const handleRemoveAddress = (_id) => {
        setIsLoading(true)
        AddressServices.deleteAddressApi(_id)
            .then(resp => {
                console.log("Delete Cart", resp.data.address)
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
            {
                isModalOpened &&
                <NewAddressModal
                    isModalOpened={isModalOpened}
                    handleAddressToggle={handleAddressToggle}
                />
            }
            <Paper>
                {list.map((item) => {
                    return (
                        <Paper key={item._id} style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <div style={{ display: 'block' }}>
                                    <div>
                                        {item.addressLine},{item.pincode}
                                    </div>
                                    <div>
                                        {item.city} , {item.state}
                                    </div>
                                    <div>
                                        {item.country}
                                    </div>
                                </div>
                                <Button small variant='contained' color='secondary' onClick={() => handleRemoveAddress(item._id)}><CloseIcon /></Button>
                            </div>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={() => handleUpdateAddress(item.addressLine,
                                    item.pincode, item.city, item.state, item.country)}
                            >
                                Edit
                            </Button>
                        </Paper>
                    )
                })}


                <Button style={{ margin: '20px' }} variant='contained' onClick={handleAddressToggle} >Add Address</Button>
            </Paper>

        </>
    )
}
