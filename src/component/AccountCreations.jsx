import React, { useState } from "react";

function AccountCreations() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("account created successfully");
    clearform();
    passLenAlert();
  };

  const clearform = () => {
    setPassword("");
    setUsername("");
  };
  const passLenAlert = () => {
    if (password.length == null) {
      alert("Maximum letters should be 5");
    }
  };
  return (
    <>
      <div className="">
        <div className="text-left font-bold text-green-500 text-4xl ">
          Welcome
        </div>
        <div className="flex justify-center mt-10">
          <div className="p-10 rounded-lg drop-shadow-lg bg-white mt-5 max-w-sm w-full">
            <div className="text-left font-bold text-green-500 text-2xl pb-3">
              Create Account
            </div>
            <div className="mx-auto">
              <fieldset>
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="flex justify-start mb-1"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter username"
                      className="w-full p-2 rounded border border-gray-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="flex justify-start mb-1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full p-2 rounded border border-gray-300"
                      required
                    />
                  </div>
                  <button
                    disabled={!(password.length > 5)}
                    type="submit"
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-400"
                  >
                    Create Account
                  </button>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountCreations;
