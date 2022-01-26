import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const style = 'py-2 border-b border-slate-300';

function TableBody() {
  const { data } = useContext(GlobalContext);

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

  return (
    <tbody className="bg-white w-full">
      {data && data.map((planet) => (
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
