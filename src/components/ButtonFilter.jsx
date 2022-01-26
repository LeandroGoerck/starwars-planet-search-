import React from 'react';

function ButtonFilter() {
  return (
    <div className="flex items-center justify-between">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={ () => {} }
      >
        Filtrar
      </button>
    </div>
  );
}

export default ButtonFilter;
