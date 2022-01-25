import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import getApi from '../services/getApi';

function GlobalProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    const apiResults = () => {
      getApi()
        .then((json) => setData(json.results));
    };
    apiResults();
  }, []);
  console.log(data);
  return (
    <GlobalContext.Provider value={ { data } }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
