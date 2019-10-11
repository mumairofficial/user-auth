import React from "react";

import BlankLayout from "../common/layout-blank";

const loginPageStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100vh"
};

const loginCardStyles = {
  width: "360px"
};

const LoginPage = () => {
  return (
    <BlankLayout style={loginPageStyles} className="bg-gray-300">
      <div style={loginCardStyles} className="bg-white rounded-lg px-6 py-8">
        <div className="mb-4 text-2xl">User Auth Portal</div>

        <div>
          <span className="tracking-wide text-gray-600">Username</span>
          <div>
            <input
              type="text"
              className="w-full mt-2 border border-gray-400 rounded-lg px-3 py-2 outline-none"
            />
          </div>
        </div>

        <div className="mt-3">
          <span className="tracking-wide text-gray-600">Password</span>
          <div>
            <input
              type="text"
              className="w-full mt-2 border border-gray-400 rounded-lg px-3 py-2 outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full mt-2 bg-purple-500 text-white tracking-wider text-lg rounded-lg py-3">
            LOGIN
          </button>
        </div>
      </div>
    </BlankLayout>
  );
};

export default LoginPage;
