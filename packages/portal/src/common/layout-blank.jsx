import React from "react";

const LayoutBlank = ({ className, style, children }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default LayoutBlank;
