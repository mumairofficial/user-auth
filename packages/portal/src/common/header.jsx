import React from "react";

const headerStyles = {
  height: "58px",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  fontSize: "18px"
};

const Header = props => {
  return (
    <div
      className="bg-purple-900 px-4 font-semibold tracking-wider"
      style={headerStyles}
    >
      {props.title}
    </div>
  );
};

export default Header;
