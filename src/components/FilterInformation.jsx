import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function FilterInformation() {
  const { filteredInfo, setFilteredInfo } = useContext(GlobalContext);

  function deleteFilter(option) {
    const deletedFilterList = filteredInfo.filterByNumericValues.filter(
      (item) => item.column !== option,
    );
    if (deletedFilterList) {
      setFilteredInfo({ filterByNumericValues: deletedFilterList });
    }
  }

  function buildInformation() {
    if (filteredInfo?.filterByNumericValues) {
      return filteredInfo.filterByNumericValues.map((info, index) => (
        <div
          key={ index }
          data-testid="filter"
          className="flex flex-row justify-center items-center"
        >
          <div className="bg-white flex m-1 pl-4 pr-2 rounded-md items-center">
            <span>{`${info.column} ${info.comparison} ${info.value}`}</span>
            <button
              type="button"
              className="bg-red-500 font-bold hover:bg-red-700
                m-1 px-1 rounded text-white"
              value={ info.column }
              onClick={ () => deleteFilter(info.column) }
            >
              X
            </button>
          </div>
        </div>
      ));
    }
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {buildInformation()}
    </div>
  );
}

export default FilterInformation;
