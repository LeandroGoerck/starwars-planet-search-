import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function ButtonFilter(props) {
  const { dataTestId, value } = props;
  const { filteredInfo, setFilteredInfo } = useContext(GlobalContext);

  function pushObjInfoToArray(newObj) {
    if (
      typeof filteredInfo.filterByNumericValues !== 'undefined'
      && filteredInfo.filterByNumericValues
    ) {
      const filteredList = filteredInfo.filterByNumericValues;
      const newfilteredInfo = [...filteredList, newObj];
      return newfilteredInfo;
    }
    return [];
  }

  return (
    <div className="flex items-center justify-between">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        data-testid={ dataTestId }
        onClick={ () => setFilteredInfo({ filterByNumericValues: pushObjInfoToArray(value) }) }
      >
        Filtrar
      </button>
    </div>
  );
}

ButtonFilter.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  filterObj: PropTypes.any,
  setFilteredInfo: PropTypes.func.isRequired,
};

export default ButtonFilter;
