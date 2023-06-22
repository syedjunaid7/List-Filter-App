import React, { useContext } from "react";
import {Tdata} from './SearchFilter';

function TData() {
    const filteredData = useContext(Tdata)
  return (
    <>
      {filteredData.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </>
  );
}

export default TData;
