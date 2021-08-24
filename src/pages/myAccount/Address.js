import React, { useState, useEffect } from 'react'
import { Divider, Grid, Paper, makeStyles, Button, div, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import NewAddressModal from './NewAddressModal';
import { AddressServices } from '../../services/addressServices';
import Loader from '../../component/Loader'
import EditAddressModal from './EditAddressModal';

export default function Address() {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isEditModalOpened, setIsEditModalOpened] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])
    const [selectedAddress, setSelectedAddress] = useState({});

    useEffect(() => {
        setIsLoading(true)
        AddressServices.getNewAddressApi()
            .then(resp => {
                console.log("get Address", resp.data.address)
                setList(resp.data.address)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })

    }, [])

    const handleAddressToggle = () => {
        setIsModalOpened(!isModalOpened)
    }

    const toggleUpdateAddress = (id, data) => {
        setIsEditModalOpened(!isEditModalOpened)

        setIsLoading(true)
        AddressServices.updateAddressApi(id, data)
            .then(resp => {
                console.log("Update Address", resp.data)
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

    const handleEditButtonClick = (data) => {
        setSelectedAddress(data);
        setIsEditModalOpened(true)
    }


    return (
        <>

            <Loader isLoading={isLoading} />
            {
                isModalOpened &&
                <NewAddressModal
                    isModalOpened={isModalOpened}
                    handleAddressToggle={handleAddressToggle}
                    setIsModalOpened={setIsModalOpened}
                />
            }
            {
                isEditModalOpened &&
                <EditAddressModal
                    isEditModalOpened={isEditModalOpened}
                    toggleUpdateAddress={toggleUpdateAddress}
                    selectedAddress={selectedAddress}
                    setIsEditModalOpened={setIsEditModalOpened}
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
                                <Button small
                                    variant='contained'
                                    color='secondary'
                                    onClick={() => handleRemoveAddress(item._id)}>
                                    <CloseIcon />
                                </Button>
                            </div>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={() => handleEditButtonClick(item)}
                            >
                                Edit
                            </Button>
                        </Paper>
                    )
                })}


                <Button
                    style={{ margin: '20px' }}
                    variant='contained'
                    onClick={handleAddressToggle}>
                    Add Address
                </Button>
            </Paper>

        </>
    )
}
