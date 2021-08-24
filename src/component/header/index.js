import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Grid,
    InputBase,
    makeStyles,
    Tabs,
    Tab,
    alpha
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import Logo from '../../assets/amazonLogo.jpg'
import { useHistory } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext';
import Popover from '@material-ui/core/Popover';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { AuthService } from '../../services/authServices';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: 'auto',
        height: 'auto',
        position: 'fixed'
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: 'auto'
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },

        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',

    },
    button: {
        background: "white",
        '&:hover': {
            background: "#f00",
        },
    },
    img: {
        width: '100px',
        height: '50px'
    },
    menubutton: {
        fontWeight: 700,
        size: '18px',
        '&:hover': {
            background: "rgb(128, 128, 128)",
        },
    },

}));

export default function Header() {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(1);
    const [value, setValue] = useState()
    const history = useHistory();
    const { setAuthState } = useAuthContext()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const handleTabChange = (newValue) => {
        setValue(newValue)
    }

    const handleCartClick = () => {
        console.log(AuthService.getAccessToken())
        if (AuthService.getAccessToken()) {
            history.push('/cartList')
        }
        else {
            history.push(`/signin?ref=cartList`)
        }
    }

    return (
        <AppBar positionFixed style={{ backgroundColor: 'black' }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    aria-label="open drawer"
                >
                    <img className={classes.img} src={Logo} alt='logo' />
                </IconButton>
                <Tabs
                    value={value}
                    centered
                    indicatorColor='black'
                // onChange={handleTabChange}
                >
                    <Tab className={classes.menubutton}
                        label='Home'
                        href='/' />
                    <Tab
                        className={classes.menubutton}
                        label='Product'
                        href='/product' />
                    <Tab
                        className={classes.menubutton}
                        label='Order'
                        href='/order' />
                </Tabs>
                <Grid className={classes.gridContainer}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <Button className={classes.button} onClick={handleCartClick} >
                        <ShoppingCartOutlinedIcon />
                    </Button>
                    <Button
                        className={classes.button}
                        aria-describedby={id}
                        onClick={handleClick}
                    >
                        <AccountCircleSharpIcon />
                    </Button>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <List component="nav" aria-label="main mailbox folders">
                            {AuthService.getAccessToken() ? <>
                                <ListItem button>
                                    <ListItemText primary="Account"
                                        onClick={() => {
                                            handleClose();
                                            history.push('/myAccount')
                                        }} />
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText primary="Logout" onClick={() => {
                                        setAuthState({});
                                        handleClose();
                                        history.push('/signin')
                                    }} />
                                </ListItem>
                            </> :
                                <ListItem button>
                                    <ListItemText primary="Log In" onClick={() => {
                                        handleClose();
                                        AuthService.logout();
                                        history.push('/signin')
                                    }} />
                                </ListItem>
                            }
                        </List>
                    </Popover>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
