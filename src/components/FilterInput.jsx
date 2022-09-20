import PropTypes from 'prop-types';
import React from 'react';

function FilterInput(props) {
  const { value, handleChange, dataTestId } = props;
  return (
    <div>
      <label
        className="text-gray-500 font-bold md:text-right mb-1 md:mb-0
        flex flex-row"
        htmlFor="value"
      >
        <input
          className="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4
          text-gray-700 leading-tight focus:outline-none focus:bg-white
          focus:border-green-500 hover:shadow-md"
          placeholder="valor"
          data-testid={ dataTestId }
          type="number"
          id="value"
          value={ value }
          onChange={ (event) => handleChange(event.target.value) }
        />
      </label>
    </div>
  );
}

FilterInput.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default FilterInput;
