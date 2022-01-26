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
    // setValue,
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

  return (
    <div className="bg-yellow-500 pt-4 pb-4 flex flex-box justify-center">
      <FilterSelect
        dataTestId="column-filter"
        value={ column }
        handleChange={ setColumn }
        valuesArray={ columnArray }
      />

      <FilterSelect
        dataTestId="comparison-filter"
        value={ comparison }
        handleChange={ setComparison }
        valuesArray={ comparisonArray }
      />

      <FilterInput
        dataTestId="value-filter"
        value={ value }
      />

      <ButtonFilter />

    </div>
  );
}

export default FilterHeader;
