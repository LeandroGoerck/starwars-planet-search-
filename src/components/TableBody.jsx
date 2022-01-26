import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const style = 'py-2 border-b border-slate-300';

function TableBody() {
  const { data, search } = useContext(GlobalContext);

  const bodyArray = ['name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url'];

  function handleFilter(apiData, filterInput) {
    if (!apiData) {
      return [];
    }
    if (filterInput) {
      const filteredData = apiData.filter((planetData) => planetData
        .name.includes(filterInput));
      return filteredData;
    }
    return apiData;
  }

  const filteredApiData = handleFilter(data, search);

  return (
    <tbody className="bg-white w-full">
      {filteredApiData.map((planet) => (
        <tr key={ planet.name } className={ style }>
          {bodyArray.map((value, index) => (
            <td key={ `${index}_${value}` } className={ style }>
              {planet[value]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
