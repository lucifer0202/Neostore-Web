import React, {useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignUpForm from './signupForm';
import { Grid } from '@material-ui/core'
import { useAuthContext } from '../../contexts/AuthContext';

import { AuthService } from '../../services/authServices'


const SignUpPage = () => {

    const history = useHistory();
    const { authState, setAuthState } = useAuthContext();
    const [signUpError, setSignUpError] = useState(false)
  
    const navigateToSignInRedirect = useCallback(() => {
      history.replace('/home')
    }, [history]);
  
    // redirect if user is already logged in
    useEffect(() => {
      if (authState.user) {
        navigateToSignInRedirect();
      }
    }, [authState.user, navigateToSignInRedirect]);
  

    const handleSubmit = (signUpInput) => {
        console.log("---", signUpInput)
        try {
            const user = AuthService.signUp(signUpInput);
            setAuthState({ ...authState, user });
            navigateToSignInRedirect();

        } catch (e) {
            setSignUpError(e.message);
        }
    };

    return (
        <>
            <Grid style={{display: 'flex' , justifyContent: 'center'}} >
                {/* <Grid container spacing={3} className="centered" >
                <Grid item>
                    <Button className='btn_link' color='primary' variant='contained' endIcon={<FacebookIcon />}>Login with Facebook</Button>
                </Grid>
                <Grid item>
                    <Button className='btn_link' color='secondary' variant='contained'>Login with google</Button>
                </Grid>
                <Grid item>
                    <Button className='btn_link' color='primary' variant='contained'>Login with google</Button>
                </Grid>
            </Grid> */}
                <SignUpForm signUpError={signUpError} onSubmit={handleSubmit} />
            </Grid>
        </>
    )
};
export default SignUpPage