import React, { useState, useContext } from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    Link,
    Divider,
} from "@material-ui/core";
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import FeedbackContext from '../context/feedbackContext';
import './style.css'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        width: '400px',
        margin: 'auto ',
        display: 'grid',
        height: '20rem'
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '30ch',
    },
    form: {
        padding: '28px'
    }


}));

export default function SignInForm({ onSubmit, toggleModal }) {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({
            email, password
        })
    }
    const handleEmailInput = (event) => {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
            setEmailError(false);
        }
        else {
            setEmailError(true);
        }

        setEmail(event.target.value)
    }
    const handlePasswordInput = (event) => {
        if ((event.target.value).length > 5) {
            setPasswordError(false)
        }
        else {
            setPasswordError(true)
        }

        setPassword(event.target.value)
    }

    const handleSignup = () => {
        history.push("/signup")
    }

    return (
        <Paper
            elevation={6}
            className={classes.paper}
        >
            <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container direction="column" spacing={2} style={{ margin: 'auto' }}>
                    <Grid item>
                        <TextField
                            label="Email"
                            error={emailError}
                            helperText={emailError ? "Incorrect Entry" : ""}
                            variant="outlined"
                            onChange={handleEmailInput}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Password"
                            error={passwordError}
                            helperText={passwordError ? "Incorrect Entry" : ""}
                            variant="outlined"
                            onChange={handlePasswordInput}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#1877f2', color: 'white' }}
                            type="submit"
                            className="button-block"
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2" onClick={toggleModal}>
                        Forgot Password?
                    </Link>
                </Grid>
                <Divider />
                <Button variant='contained' onClick={handleSignup} style={{ background: '#42b72a', color: 'white' }}>Register</Button>
            </form>
        </Paper>
    )
}
