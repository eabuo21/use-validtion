import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "../Components/LoginValidation";

const Login = () => {
  // Create state to handle data entry and validation in form
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // Function to handle form inputs
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Function to handle errors upon form validation
  const [errors, setErrors] = useState({});

  // Prevent form submission on default state
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="login-container bg-blue-700 h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="login-form bg-white rounded-md p-7 flex flex-col justify-start items-center shadow-sm mx-auto w-2/6 h-2/3 gap-6"
      >
        <label className="email-label flex flex-col justify-start items-start w-full">
          <p className="text-black font-bold text-sm">Email:</p>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInput}
            className="input-field w-full h-[50px] border-b-red border-b focus:outline-0"
          />
          {errors.email && (
            <span className="text-red text-sm">{errors.email}</span>
          )}
        </label>

        <label className="password-label flex flex-col justify-start items-start w-full">
          <p className="text-black font-bold text-sm">Password:</p>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleInput}
            className="input-field w-full h-[50px] border-b-red border-b focus:outline-0"
          />
          {errors.password && (
            <span className="text-red text-sm">{errors.password}</span>
          )}
        </label>

        <button
          type="submit"
          className="input-field h-[50px] w-full bg-blue-700 text-white font-bold"
        >
          Sign In
        </button>
        <p className="notice-text text-black text-sm font-semibold text-left mr-auto">
          Don't have an account?
        </p>
        <Link
          to="/signup"
          className="input-field h-[50px] w-full bg-grey text-center flex justify-center items-center border border-blue text-black font-bold"
        >
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Login;
