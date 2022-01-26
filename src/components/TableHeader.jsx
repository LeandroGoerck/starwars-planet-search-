import React from 'react';

const style = 'py-2 border-b border-slate-300';

function TableHeader() {
  const tableHeaderArray = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  return (
    <thead className="bg-gray-500 w-full">
      <tr>
        {tableHeaderArray.map((item, index) => (
          <th key={ index } className={ style }>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
