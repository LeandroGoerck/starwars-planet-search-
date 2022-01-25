import React, { useEffect } from 'react';
import getApi from '../services/getApi';

const ONE_SECOND = 1000;

function Table() {
  // useEffect(() => {
  //   getApi();
  // }, []);

  return (
    <table>
      <tr>
        <th>Col1</th>
        <th>Col2</th>
        <th>Col3</th>
        <th>Col4</th>
      </tr>
    </table>
  );
}

export default Table;
