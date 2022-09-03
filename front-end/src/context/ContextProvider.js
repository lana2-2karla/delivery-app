import React, { useMemo, useState } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState('0,00');

  const contextData = useMemo(() => ({
    user,
    setUser,
    cart,
    setCart,
    subTotal,
    setSubTotal,
  }), [user, setUser, cart, setCart, subTotal, setSubTotal]);

  return (
    <Context.Provider value={ contextData }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
