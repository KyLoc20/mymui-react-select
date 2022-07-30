import React, { FC } from "react";
const Select: FC<{ name: string }> = ({ name }) => {
  return <div style={{ padding: "6px", background: "rgba(0,0,0,0.27)", borderRadius: "6px" }}>This is a Select Component of {name}</div>;
};
export default Select;
