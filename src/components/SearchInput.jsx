import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function SearchInput() {
  const { search, setSearch } = useContext(GlobalContext);
  return (
    <div className="flex flex-row justify-center mt-4">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0"
        htmlFor="value"
      >
        <input
          className="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4
          text-gray-700 leading-tight focus:outline-none focus:bg-white hover:shadow-md
          focus:border-green-500"
          placeholder="filtrar por nome"
          data-testid="name-filter"
          type="text"
          id="value"
          value={ search }
          onChange={ (event) => setSearch(event.target.value) }
        />
      </label>
    </div>
  );
}

export default SearchInput;
