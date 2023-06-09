import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SearchFilter() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [fData, setfData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setfData(res);
      });
  }, []);
  function input(e) {
    setInputVal(e.target.value);
    const search = data.filter(
      (item) =>
        item.name.toLowerCase().startsWith(inputVal.toLowerCase()) ||
        item.email.toLowerCase().startsWith(inputVal.toLowerCase())
    );
    setData(search);
  }
  return (
    <div class='container'>
      <input placeholder="search by Name or Email" onChange={input} value={inputVal} />
      <table class="styled-table">
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {inputVal === ""
          ? fData.map((item) => (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              </>
            ))
          : data.map((item) => (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              </>
            ))}
      </table>
    </div>
  );
}
