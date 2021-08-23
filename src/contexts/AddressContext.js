import React, { useContext, useState } from 'react';

// ---------- AuthContext ---------->

/** AuthContext contains AuthState and AuthStateSetter */
const AddressContext = React.createContext()

// ---------- AddressContextProvider ----------
const AddressContextProvider = ({ children }) => {
  const [addressState, setAddressState] = useState({})

  const value = { addressState, setAddressState };
  return <AddressContext.Provider value={value}>{children}</AddressContext.Provider>;
};

// ---------- useAddressContext ----------
function useAddressContext() {
  const addressContext = useContext(AddressContext);
  /* istanbul ignore next */
  if (addressContext === undefined) {
    throw new Error('useAddressContext must be used within a AddressContextProvider');
  }
  return addressContext;
}

export { AddressContextProvider, useAddressContext };