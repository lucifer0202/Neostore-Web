import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { AuthService } from '../../services/authServices'
import ForgotPasswordForm from './ForgotPasswordForm';


const ForgotPasswordPage = () => {
  const history = useHistory();
  const { authState, setAuthState } = useAuthContext();
  const [passwordError, setPasswordError] = useState(false)

//   const navigateToSignInRedirect = useCallback(() => {
//     history.replace('/home')
//     // navigate(AuthService.getSignInRedirectPath());
//     // AuthService.removeSignInRedirectPath();
//   }, [history]);

//   // redirect if user is already logged in
//   /* istanbul ignore next */
//   useEffect(() => {
//     if (authState.user) {
//       navigateToSignInRedirect();
//     }
//   }, [authState.user, navigateToSignInRedirect]);


  const handleSubmit = (forgotPasswordInput) => {
    try {
      const user = AuthService.forgotPassword(forgotPasswordInput);
      setAuthState({ ...authState, user });
    //   navigateToSignInRedirect();
    } catch (e) {
        setPasswordError(e.message);
    }
  };

  return (
    <ForgotPasswordForm passwordError={passwordError} onSubmit={handleSubmit} />
  );
}
export default ForgotPasswordPage