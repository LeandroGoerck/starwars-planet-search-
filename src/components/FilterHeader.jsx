import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import ButtonFilter from './ButtonFilter';
import FilterInput from './FilterInput';
import FilterSelect from './FilterSelect';

function FilterHeader() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filteredInfo,
    setFilteredInfo,
  } = useContext(GlobalContext);

  const columnArray = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisonArray = [
    'maior que',
    'menor que',
    'igual a',
  ];

  function getNotSelectedFilterList() {
    if (filteredInfo?.filterByNumericValues) {
      const filteredList = filteredInfo.filterByNumericValues.map((obj) => obj.column);
      const newColumnArray = [...columnArray];
      const notSelectedFilterList = newColumnArray
        .filter((item) => !filteredList.toString().includes(item));
      return notSelectedFilterList;
    }
  }

  const filterValuesArray = getNotSelectedFilterList();

  const filterObj = {
    column,
    comparison,
    value,
  };

  return (
    <div
      className="pt-4 pb-4 flex flex-box justify-center
                  bg-opacity-10 hover:bg-opacity-50"
    >
      <FilterSelect
        dataTestId="column-filter"
        value={ column }
        handleChange={ setColumn }
        valuesArray={ filterValuesArray }
      />

      <FilterSelect
        dataTestId="comparison-filter"
        value={ comparison }
        handleChange={ setComparison }
        valuesArray={ comparisonArray }
      />

      <FilterInput
        dataTestId="value-filter"
        value={ Number(value) }
        handleChange={ setValue }
      />

      <ButtonFilter
        dataTestId="button-filter"
        value={ filterObj }
        setFilteredInfo={ setFilteredInfo }
      />

    </div>
  );
}

export default FilterHeader;
