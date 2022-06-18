import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const style = 'py-2 border-b border-slate-300';

function TableBody() {
  const { data, search, filteredInfo } = useContext(GlobalContext);

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

  function handleComparison(apiData) {
    console.log('filteredInfo = ', filteredInfo);
    if (filteredInfo?.filterByNumericValues) {
      const filteredColumnList = filteredInfo
        .filterByNumericValues.map((obj) => obj.column);
      const filteredValueList = filteredInfo
        .filterByNumericValues.map((obj) => obj.value);
      const filteredComparisonList = filteredInfo
        .filterByNumericValues.map((obj) => obj.comparison);

      console.log('filteredColumnList =', filteredColumnList);
      console.log('filteredValueList =', filteredValueList);
      console.log('filteredComparisonList =', filteredComparisonList);

      return filteredColumnList.reduce((acc, curr, index) => {
        // if (filteredColumnList[index]) {
        if (filteredComparisonList[index] === 'maior que') {
          return [...apiData, acc].filter(
            (info) => Number(info[filteredColumnList[index]])
              > Number(filteredValueList[index]),
          );
        }

        if (filteredComparisonList[index] === 'menor que') {
          return [...apiData, acc].filter(
            (info) => Number(info[filteredColumnList[index]])
              < Number(filteredValueList[index]),
          );
        }
        if (filteredComparisonList[index] === 'igual a') {
          return [...apiData, acc].filter(
            (info) => Number(info[filteredColumnList[index]])
            === Number(filteredValueList[index]),
          );
        }
        // }
        return null;
      }, apiData);
    }

    return apiData;
  }

  const filteredApiData = handleFilter(data, search);
  const filteredAndComparedData = handleComparison(filteredApiData);

  console.log(filteredAndComparedData);

  return (
    <tbody className="bg-white w-full">
      {filteredAndComparedData.map((planet) => (
        <tr key={ planet.name } className={ style }>
          {bodyArray.map((info, index) => (
            <td key={ `${index}_${info}` } className={ style }>
              {planet[info]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
