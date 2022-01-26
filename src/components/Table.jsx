import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function Table() {
  const {
    data,
  } = useContext(GlobalContext);
  console.log(data);
  return (
    <div>
      <table className="bg-gray-500">
        <tr>
          <th className="px-4 py-2 border-b border-slate-300">Name</th>
          <th className="px-4 py-2 border-b border-slate-300">Rotations</th>
          <th className="px-4 py-2 border-b border-slate-300">Orbit Period</th>
        </tr>
      </table>
    </div>
  );
}

export default Table;
