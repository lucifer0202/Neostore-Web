import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { Grid, Button, Paper, Typography } from '@material-ui/core'

import { AuthService } from '../../services/authServices'
import SignInForm from './SignInForm';
import SocialLogin from './SocialLogin';
import PasswordModal from '../../container/forgotpassword/ForgotPasswordModal'
import { useQuery } from '../../utils/customHooks';
import Loader from '../../component/Loader';

const SignInPage = () => {
  const history = useHistory();
  const { authState, setAuthState } = useAuthContext();
  const [signInError, setSignInError] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const query = useQuery();
  const [isLoading,setIsLoading] = useState(false);

  const navigateToSignInRedirect = useCallback(() => {
    if(query.get('ref')){
      history.replace(`/${query.get('ref')}`)
    }else{
      history.replace('/')
    }

    // navigate(AuthService.getSignInRedirectPath());
    // AuthService.removeSignInRedirectPath();
  }, [history]);

  // redirect if user is already logged in
  /* istanbul ignore next */
  useEffect(() => {
    if (authState.user) {
      navigateToSignInRedirect();
    }
  }, [authState.user, navigateToSignInRedirect]);


  const handleSubmit = async (signInInput) => {
    try {
      setIsLoading(true);
      const user = await AuthService.signIn(signInInput);
      setAuthState({ ...authState, user });
      setIsLoading(false);
      navigateToSignInRedirect();
    } catch (e) {
      setIsLoading(false);
      setSignInError(e.message);
    }
  };

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened)
  }


  return (
    <>
    <Loader isLoading={isLoading}/> 
      <Grid container>
        <Grid sm={5}>
          <SocialLogin />
        </Grid>
        <Grid sm={7}>
          <SignInForm toggleModal={toggleModal}
            signInError={signInError} onSubmit={handleSubmit} />
        </Grid>
      </Grid>
      {isModalOpened && <PasswordModal
        toggleModal={toggleModal}
        isModalOpened={isModalOpened}

      />}
    </>


  );
}
export default SignInPage