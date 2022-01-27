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
    if (filteredInfo?.filterByNumericValues) {
      const filteredColumnList = filteredInfo
        .filterByNumericValues.map((obj) => obj.column);
      const filteredValueList = filteredInfo
        .filterByNumericValues.map((obj) => obj.value);
      const filteredComparisonList = filteredInfo
        .filterByNumericValues.map((obj) => obj.comparison);

      if (filteredColumnList[0]) {
        // const comparedData = apiData.filter((info) => Number(info[filteredColumnList[0]]) > filteredValueList[0]);
        console.log(` column: ${filteredColumnList[0]}   
                      comparison: ${filteredComparisonList[0]}  
                      value: ${filteredValueList[0]}`);

        if (filteredComparisonList[0] === 'maior que') {
          return apiData.filter(
            (info) => Number(info[filteredColumnList[0]]) > Number(filteredValueList[0]),
          );
        }

        if (filteredComparisonList[0] === 'menor que') {
          return apiData.filter(
            (info) => Number(info[filteredColumnList[0]]) < Number(filteredValueList[0]),
          );
        }

        if (filteredComparisonList[0] === 'igual a') {
          return apiData.filter(
            (info) => Number(info[filteredColumnList[0]])
            === Number(filteredValueList[0]),
          );
        }

        // return comparedData;
      }
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
