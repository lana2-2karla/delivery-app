import React, { useMemo, useState } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const { stateX, setStateX } = useState('');

  const contextData = useMemo(() => ({
    stateX,
    setStateX,
  }), [stateX, setStateX]);

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
