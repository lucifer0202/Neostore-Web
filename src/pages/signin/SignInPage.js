import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { AuthService } from '../../services/authServices'
import SignInForm from './SignInForm';
import SocialLogin from './SocialLogin';
import PasswordModal from '../../container/forgotpassword/ForgotPasswordModal'

const SignInPage = () => {
  const history = useHistory();
  const { authState, setAuthState } = useAuthContext();
  const [signInError, setSignInError] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false)

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

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened)
  }


  return (
    <div style={{ background: 'white' }}>
      <SocialLogin />
      <SignInForm toggleModal={toggleModal}
        signInError={signInError} onSubmit={handleSubmit} />
      <PasswordModal
        toggleModal={toggleModal}
        isModalOpened={isModalOpened}

      />
    </div >
  );
}
export default SignInPage