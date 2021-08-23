import React, { useState, useEffect } from 'react'
import MainModal from '../../component/mainModal'
import { Paper, Button, makeStyles } from '@material-ui/core';
import Loader from '../../component/Loader'
import { AddressServices } from '../../services/addressServices';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 460,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function BuyModal({ toggleBuyButton, isModalOpened }) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        AddressServices.getNewAddressApi()
            .then(resp => {
                console.log("get address", resp.data.address)
                setList(resp.data.address)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            })
    }, [])

    return (
        <>
            {<Loader isLoading={isLoading} />}
            <MainModal open={isModalOpened} toggleModal={toggleBuyButton}>
                <Paper>
                    <List dense className={classes.root}>
                        {list.map((item) => {
                            return (
                                <ListItem key={item._id} button>
                                    <ListItemText id={item._id}>
                                            <div>
                                                {item.addressLine},{item.pincode}
                                            </div>
                                            <div>
                                                {item.city} , {item.state}
                                            </div>
                                            <div>
                                                {item.country}
                                            </div>
                                    </ListItemText>

                                    {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
                                    <ListItemSecondaryAction>
                                        <Checkbox
                                            edge="end"
                                        
                                        // checked={checked.indexOf(value) !== -1}
                                        // inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                        
                                    </ListItemSecondaryAction>
                              
                                </ListItem>
                            )
                        })}
                    </List>
                    <Button variant='contained' color='primary'>Buy Now</Button>
                </Paper>
            </MainModal>
        </>
    )
}




