import React, { useState, useEffect } from "react";

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
      <input
        placeholder="Search by Name or Email"
        onChange={inputChange}
        value={inputVal}
      />
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {inputVal === ""
            ? filteredData.map((item) => (
                <tr key={item.id} >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              ))
            : filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
