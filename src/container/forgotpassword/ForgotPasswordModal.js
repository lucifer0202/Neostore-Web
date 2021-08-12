import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { AuthService } from '../../services/authServices'
import ForgotPasswordForm from './ForgotPasswordForm';

import MainModal from '../../component/mainModal'

const ForgotPasswordModal = ({ toggleModal, isModalOpened }) => {
  const history = useHistory();
  const { authState, setAuthState } = useAuthContext();
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (forgotPasswordInput) => {
    try {
      const user = AuthService.forgotPassword(forgotPasswordInput);
      // setAuthState({ ...authState, user });
    } catch (e) {
      setPasswordError(e.message);
    }
  };

  return (
    <MainModal
      open={isModalOpened}
      toggleModal={toggleModal}
    >

      <ForgotPasswordForm passwordError={passwordError} onSubmit={handleSubmit} />
    </MainModal>
  );
}
export default ForgotPasswordModal