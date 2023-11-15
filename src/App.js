import React, { useState } from "react";
import "./App.scss";
import UserDetails from "./component/UserDeatil";
import Header from "./component/Header";
import AccountCreations from "./component/AccountCreations";

function App() {
  const [tab, setTab] = useState("accountCreations");

  return (
    <div className="h-screen ">
    <div className="flex flex-col md:flex-row h-screen ">
      <div className="md:w-1/4 bg-white py-10 px-4 md:px-10 shadow-lg">
        <Header />
        <div className="mt-4 md:mt-10 flex flex-wrap">
        <button
            className={`w-full mr-2 mb-2 px-4 py-2 border rounded shadow-2xl  ${
              tab === "accountCreations" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => setTab("accountCreations")}
          >
            Account Creation
          </button>
          <button
            className={` w-full mr-2 mb-2 px-4 py-2 border rounded shadow-2xl mt-4 ${
              tab === "userDetails" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => setTab("userDetails")}
          >
            User Details
          </button>
          
        </div>
      </div>
      <div className="md:w-3/4 p-4 md:p-10">
        {tab === "accountCreations" && <AccountCreations />}
        {tab === "userDetails" && <UserDetails />}
      </div>
    </div>
    </div>
  );
}

export default App;
