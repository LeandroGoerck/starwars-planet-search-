import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function FilterInformation() {
  const { filteredInfo, setFilteredInfo } = useContext(GlobalContext);

  function buildInformation() {
    if (
      filteredInfo.filterByNumericValues !== 'undefined'
      && filteredInfo.filterByNumericValues
    ) {
      return filteredInfo.filterByNumericValues.map((info, index) => (
        <div key={ index }>
          <span>
            {`${info.column} ${info.comparison} ${info.value}`}
          </span>
          <button
            type="button"
            className="bg-red-500 font-bold hover:bg-red-700 m-1 px-1 rounded text-white"
            value={ info.column }
            onClick={ () => console.log(info.column) }
          >
            X
          </button>
        </div>
      ));
    }
  }

  return <div>{buildInformation()}</div>;
}

export default FilterInformation;
