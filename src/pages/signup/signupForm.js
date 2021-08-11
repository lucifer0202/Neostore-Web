import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button';
import { Grid, Paper, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { green } from '@material-ui/core/colors';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import './style.css'


const useStyles = makeStyles((theme) => ({

    paper: {
        width: '600px',
        textAlign: 'center',
        background: 'white',
    },

    form: {
        margin: theme.spacing(6),
        width: '26ch',
        margin: '80px',
        textAlign: 'justify',

    },
    Button: {
        margin: '20px',
    },

}));


export default function SignUpForm({ onSubmit }) {

    const history = useHistory();
    const classes = useStyles();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirm_password, setconfirm_password] = useState('')
    const [mobile, setMobile] = useState('')
    const [gender, setGender] = useState('female');

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [mobileError, setMobileError] = useState(false)


    const handleSubmit = () => {
        onSubmit({
            email, firstName, lastName, password, confirm_password,mobile ,gender
        })
    }
    const handleFirstNameInput = (e) => {
        if (firstName.match(/^[a-zA-Z]+$/)) {
            setFirstNameError(false)
        }
        else {
            setFirstNameError(true)
        }
        setFirstName(e.target.value)
    }
    const handleLastNameInput = (e) => {
        if (lastName.match(/^[a-zA-Z]+$/)) {
            setLastNameError(false)
        }
        else {
            setLastNameError(true)
        }
        setLastName(e.target.value)

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

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleConfirmPasswordInput = (e) => {

        if (password === (e.target.value)) {
            setConfirmPasswordError(false)
        }
        else {
            setConfirmPasswordError(true)
        }
        setconfirm_password(e.target.value)
    }
    const handleMobileInput = (event) => {
        if ((event.target.value).length > 5) {
            setMobileError(false)
        }
        else {
            setMobileError(true)
        }

        setMobile(event.target.value)
    }
    const handleButton = () => {
        history.push('/login')
    }
    return (
        <Paper elevation={3} className={classes.paper}>
            <FormControl>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <Typography style={{ fontWeight: 'bold', color: "cadetblue" }}>Register to neoSTORE</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            error={firstNameError}
                            helperText={firstNameError ? "Incorrect entry." : ''}
                            onChange={handleFirstNameInput}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            error={lastNameError}
                            helperText={lastNameError ? "Incorrect entry." : ''}
                            onChange={handleLastNameInput}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Email Address'
                            variant="outlined"
                            error={emailError}
                            helperText={emailError ? "Incorrect entry." : ''}
                            onChange={handleEmailInput}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Password'
                            variant="outlined"
                            error={passwordError}
                            helperText={passwordError ? "Incorrect entry" : ''}
                            onChange={handlePasswordInput}
                        />

                    </Grid>
                    <Grid item>
                        <TextField
                            label='Confirm Password'
                            variant="outlined"
                            error={confirmPasswordError}
                            helperText={confirmPasswordError ? "Password does not match" : ''}
                            onChange={handleConfirmPasswordInput}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Mobile Number'
                            variant="outlined"
                            error={mobileError}
                            helperText={mobileError ? "incorrect " : ''}
                            onChange={handleMobileInput}
                        />

                    </Grid>
                    <Grid item>
                        <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChange} style={{ display: 'contents' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </Grid>
                </Grid>


                <Button
                    onClick={handleSubmit}
                    className={classes.Button}
                    variant="contained"
                    color="primary"
                    disableElevation
                >
                    Register
                </Button>
                <button onClick={handleButton}> Login</button>
            </FormControl>

        </Paper >
    )
}