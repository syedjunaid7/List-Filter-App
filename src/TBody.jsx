import React from "react";
import TData from "./TData";

function TBody({ inputVal }) {
  return (
    <>
      <tbody>{inputVal === "" ? <TData /> : <TData />}</tbody>
    </>
  );
}

export default TBody;
