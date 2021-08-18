import React, { useContext, useState } from 'react';

// ---------- AuthContext ---------->

/** ProductContext contains ProductState and ProductStateSetter */
const ProductContext = React.createContext({ isLoading: false })

// ---------- ProductContextProvider ----------
const ProductContextProvider = ({ children }) => {
  const [productState, setProductState] = useState({})
  const [categoryState, setCategoryState] = useState({})


  const value = { productState, setProductState, categoryState, setCategoryState };
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

// ---------- useProductContext ----------
function useProductContext() {
  const productContext = useContext(ProductContext);
  /* istanbul ignore next */
  if (productContext === undefined) {
    throw new Error('useProductContext must be used within a ProductContextProvider');
  }
  return productContext;
}

export { ProductContextProvider, useProductContext };