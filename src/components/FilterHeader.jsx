import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
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
  } = useContext(GlobalContext);

  return (
    <div className="bg-yellow-500 pt-4 pb-4 flex flex-box justify-center">
      <FilterSelect
        dataTestId="column-filter"
        value={ column }
        handleChange={ setColumn }
        valueArray={ [] }
      />

      <FilterSelect
        dataTestId="comparison-filter"
        value={ comparison }
        handleChange={ setComparison }
        valuesArray={ [] }
      />

      <FilterInput
        value={ value }
        // handleChange={{}}
      />

      <FilterSelect
        dataTestId="value-filter"
        value={ value }
        handleChange={ setValue }
        valuesArray={ [] }
      />

    </div>
  )
}

export default FilterHeader;
