import React, { useState, useContext } from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    Link,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
// import FeedbackContext from '../context/feedbackContext';
import './style.css'


const useStyles = makeStyles((theme) => ({
    paper: {
        width: '400px',
        margin: 'auto ',
        display: 'grid',
        height: '20rem'
    },


}));

export default function SignInForm({ onSubmit, toggleModal }) {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    const handleSubmit = () => {
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

    const handleLogin = (e) => {

        history.push("/dashboard");
    }
    const handleSignup = () => {
        history.push("/signup")
    }


    return (

        <div className="split right">
            <div className="centered">
                <Paper
                    variant="elevation"
                    elevation={6}
                    className={classes.paper}
                >
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
                                color="primary"
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
                        <div></div>
                        <br />
                        <div style={{ border: 'solid', color: '#c1c1c1' }}></div>
                        <br />
                        <Button variant='contained' onClick={handleSignup} style={{ background: 'greenyellow' }}>Register</Button>
                    </Grid>
                </Paper>

            </div>
        </div>
    )
}