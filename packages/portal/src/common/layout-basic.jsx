import React from "react";

import Header from "./header";
import LeftNavigation from "./left-navigation";

const LayoutBasic = ({ children }) => {
  const menuItems = [
    { key: "dashboard", label: "Dashboard", url: "/dashboard" },
    { key: "users", label: "Users", url: "/users" },
    { key: "sessions", label: "Sessions", url: "/sessions" }
  ];
  return (
    <div className="App">
      <Header title="User Passport" />
      <div className="flex">
        <LeftNavigation menuItems={menuItems} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutBasic;
