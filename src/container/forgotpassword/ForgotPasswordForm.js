import React, { useState } from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    '& > *': {
        margin: theme.spacing(3),
        width: "auto",
        height: 'auto',
    },
}));
export default function ForgotPasswordForm({ onSubmit }) {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({
            email
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
    const handlePasswordInput = (e) => {

    }
    return (

        <Paper elevation={3} >
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>

                <Grid container sm spacing={2}>
                    <Grid item xs={12}>
                        Recover Password
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            error={emailError}
                            helperText={emailError ? "Incorrect Entry" : ""}
                            variant="outlined"
                            onChange={handleEmailInput}
                        />
                    </Grid>
                    {/* <Grid item justify='left' >
                        <TextField variant='outlined' placeholder='verification code'
                        style={{ width: '400px' }}
                        >
                        </TextField>

                        </Grid>
                   
                        <Grid item >
                        <TextField  variant='outlined' placeholder='New Password'
                        onChange={handlePasswordInput}
                        style={{ width: '400px' }}
                        ></TextField>
                        </Grid>
                        <Grid item >
                        <TextField variant='outlined' placeholder='Confirm Password'
                        style={{ width: '400px' }}></TextField>
                    </Grid> */}
                </Grid>

                <Grid item xs={12}>
                    <Button variant='contained' color='primary'
                        type="submit"
                        style={{ margin: '20px' }}
                    > Submit</Button>
                </Grid>
            </form>
        </Paper>
    )
}
