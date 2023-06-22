import React from "react";

function Input({ change, val }) {
  return (
    <>
      <input
        placeholder="Search by Name or Email"
        onChange={change}
        value={val}
      ></input>
    </>
  );
}

export default Input;
