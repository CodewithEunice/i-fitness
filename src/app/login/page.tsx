"use client";

import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [file, setFile] = useState("");
  const [fileError, setFileError] = useState("");

  const loginUser = () => {
    if (!username) {
      setUsernameError("username field is required!");
    }
    if (password.length <= 6) {
      setPasswordError("password is too short");
    }
    if (!password) {
      setPasswordError("password field is required!");
    }
    if (username && password && password.length > 6 && file) {
      alert("login successfull!");
    }
    if (!file) {
      setFileError("upload file");
    }
  };

  return (
    <main>
      <section className="w-full h-screen bg-green-600">
        <div className="w-full h-screen flex justify-center items-center">
          <form className="w-[350px] py-5 px-4 bg-blue-200">
            <h1 className="text-3xl text-center font-bold mb-5">Login here</h1>
            <div className="mb-5 flex flex-col items-center gap-1">
              <label>Username:</label>
              <input
                className="px-1 py-[6px] flex-1 border-[1px] border-black"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="text-red-500">{usernameError}</p>
            </div>
            <div className="mb-5 flex flex-col items-center gap-1">
              <label>Password:</label>
              <input
                className="px-1 py-[6px] flex-1 border-[1px] border-black"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-500">{passwordError}</p>
            </div>
            <div>
              <label>file</label>
              <input
                type="file"
                className="flex-1 px-1 py-[6px] border-[1px]
               border-black "
                placeholder="insert your cv"
                onChange={(e) => setFile(e.target.value)}
              />
            </div>
            <div>
              <button
                className="px-10 py-2 my-5 hover:bg-blue-500/70
                 transition-all duration-300 rounded-full 
                 bg-blue-500 text-white"
                type="button"
                onClick={loginUser}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
export default Login;
