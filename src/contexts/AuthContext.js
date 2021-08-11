import React, { useContext, useState } from 'react';

// ---------- AuthContext ---------->

/** AuthContext contains AuthState and AuthStateSetter */
const AuthContext = React.createContext()

// ---------- AuthContextProvider ----------
const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({})

  const value = { authState, setAuthState };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ---------- useAuthContext ----------
function useAuthContext() {
  const authContext = useContext(AuthContext);
  /* istanbul ignore next */
  if (authContext === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return authContext;
}

export { AuthContextProvider, useAuthContext };