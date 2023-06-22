import React, { useState, useEffect, createContext } from "react";
import Input from "./Input";
import TBody from "./TBody";

const Tdata = createContext();
export default function SearchFilter() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilteredData(res);
      });
  }, []);

  function inputChange(e) {
    const value = e.target.value;
    setInputVal(value);
    const searchResults = data.filter(
      (item) =>
        item.name.toLowerCase().startsWith(value.toLowerCase()) ||
        item.email.toLowerCase().startsWith(value.toLowerCase())
    );
    console.log(searchResults);
    setFilteredData(searchResults);
  }

  return (
    <div className="container">
      <Input change={inputChange} val={inputVal} />
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <Tdata.Provider value={filteredData}>
          <TBody inputVal={inputVal} />
        </Tdata.Provider>
      </table>
    </div>
  );
}
export { Tdata };
