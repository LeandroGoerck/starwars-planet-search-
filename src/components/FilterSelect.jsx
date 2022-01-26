import PropTypes from 'prop-types';
import React from 'react';

function FilterSelect(props) {
  const { value, handleChange, dataTestId, valuesArray } = props;
  return (
    <select
      className="form-select appearance-none block px-3 py-1.5
      text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300 rounded transition ease-in-out
      pr-8 ml-8
      focus:text-gray-700 focus:bg-white focus:border-green-600
      focus:outline-none"
      aria-label="Metodo Pagamento"
      data-testid={ dataTestId }
      id="method"
      value={ value }
      onChange={ () => handleChange(value) }
    >
      {valuesArray !== []
      && valuesArray.map((item, index) => (
        <option key={ index } value={ item }>{ item }</option>))}
    </select>
  );
}

FilterSelect.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  valuesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterSelect;
