import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import getApi from '../services/getApi';

function GlobalProvider({ children }) {
  const [data, setData] = useState();
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState('');
  const [filteredInfo, setFilteredInfo] = useState({ filterByNumericValues: [] });

  useEffect(() => {
    const apiResults = () => {
      getApi()
        .then((json) => setData(json.results));
    };
    apiResults();
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        data,
        column,
        setColumn,
        comparison,
        setComparison,
        value,
        setValue,
        search,
        setSearch,
        filteredInfo,
        setFilteredInfo,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
