import React, { useMemo, useState } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const [user, setUser] = useState({});

  const contextData = useMemo(() => ({
    user,
    setUser,
  }), [user, setUser]);

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
