import React, { useState } from 'react';
import {AppBar,
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


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: 'auto',
        height: 'auto',
        position: 'fixed'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    tab: {
        color: 'white',
        fontWeight: 'bold',

    },
    tabContainer: {
        display: 'flex',
        // marginLeft: '307px'
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
    }
}));

export default function Header() {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(1);
    const [value, setValue] = useState(1)
    const history = useHistory();


    const handleTabChange = (newTabIndex) => {
        setTabIndex(newTabIndex)
    }
    const handleAccount = () => {
        history.push("/signin");
        console.log("----")
    }
    const handleCartClick = () => {
        history.push('/cartList')
    }

    return (
        <AppBar positionFixed style={{ backgroundColor: 'black' }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <img className={classes.img} src={Logo} alt='logo' />
                </IconButton>
                <div className={classes.tabContainer}>
                    <Tabs
                        value={tabIndex}
                        centered
                        indicatorColor='black'
                        onChange={(event, newTabIndex) => handleTabChange(newTabIndex)}
                    >
                        <Tab label='Home' className={classes.tab} value={1} href='/' />
                        <Tab label='Product' className={classes.tab} value={2} href='/product' />
                        <Tab label='Order' className={classes.tab} value={3} href='/order' />
                    </Tabs>
                </div>
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

                    <Button className={classes.button} onClick={handleCartClick} ><ShoppingCartOutlinedIcon /></Button>
                    <Button className={classes.button} onClick={handleAccount}><AccountCircleSharpIcon /></Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
