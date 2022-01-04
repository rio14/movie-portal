import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import checkUserLogin from "../helpers/checkUserLogin";

function Login() {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(LoginContext);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (userName) navigate("/");
  });

  const handelLogin = (e) => {
    e.preventDefault();
    if (checkUserLogin(userInput)) {
      setUserName(userInput);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex m-auto flex-col space-y-4 justify-center items-center">
      <span className="capitalize font-semibold text-xl">
        Welcome to movie portal
      </span>
      <form
        className="flex justify-center items-center sm:flex-row flex-col space-y-4 sm:space-y-0"
        onSubmit={(e) => handelLogin(e)}
      >
        <input
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Enter your name"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
          maxLength={12}
          minLength={3}
        />
        <button
          className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 border-yellow-500 border-t border-b border-r capitalize"
          type="submit"
        >
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
