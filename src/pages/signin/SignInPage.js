import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { AuthService } from '../../services/authServices'
import SignInForm from './SignInForm';

const SignInPage = () => {
  const history = useHistory();
  const { authState, setAuthState } = useAuthContext();
  const [signInError, setSignInError] = useState(false)

  const navigateToSignInRedirect = useCallback(() => {
    history.replace('/home')
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


  const handleSubmit = (signInInput) => {
    try {
      const user = AuthService.signIn(signInInput);
      setAuthState({ ...authState, user });
      navigateToSignInRedirect();
    } catch (e) {
      setSignInError(e.message);
    }
  };

  return (
    <SignInForm signInError={signInError} onSubmit={handleSubmit} />
  );
}
export default SignInPage