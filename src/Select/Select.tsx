import React, { FC } from "react";
const Select: FC<TSelect> = ({ name }) => {
  return (
    <div className="mymui-select" style={{ padding: "6px", borderRadius: "6px", background: "rgba(0,0,0,0.27)" }}>
      This is a Select Component of {name}
    </div>
  );
};
export default Select;
type TSelect = { name: string };
