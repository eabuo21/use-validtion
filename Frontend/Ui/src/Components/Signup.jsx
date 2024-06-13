import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../Components/SignupValidation";

const Signup = () => {
  // Create state to handle data entry and validation in form
  const [values, setValues] = useState({
    name: "",
    phone: "",
    age: "",
    email: "",
    password: "",
  });

  // Create state to handle errors
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Function to handle form inputs
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Prevent form submission on default state
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Check if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:5173/signup", values) // Corrected the port number
       .then(res =>{
        navigate("/");
       })
       .catch(err=>{
        console.log(err)
       });
    }
  };

  return (
    <div className="login-container bg-blue-700 h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="login-form bg-white rounded-md p-7 grid grid-cols-2 justify-start items-center shadow-sm mx-auto w-2/6 h-auto gap-6"
      >
        <label className="email-label flex flex-col justify-start items-start w-full">
          <p className="text-black font-bold text-sm">Name:</p>
          <input
            type="text"
            placeholder="Enter your full name"
            name="name"
            onChange={handleInput}
            className="input-field w-full h-[50px] border-b-red border-b focus:outline-0"
          />
          {errors.name && (
            <span className="text-red text-sm">{errors.name}</span>
          )}
        </label>

        <label className="email-label flex flex-col justify-start items-start w-full">
          <p className="text-black font-bold text-sm">Phone Number:</p>
          <input
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            onChange={handleInput}
            className="input-field w-full h-[50px] border-b-red border-b focus:outline-0"
          />
          {errors.phone && (
            <span className="text-red text-sm">{errors.phone}</span>
          )}
        </label>

        <label className="email-label flex flex-col justify-start items-start w-full">
          <p className="text-black font-bold text-sm">Age:</p>
          <input
            type="number"
            placeholder="Enter your age"
            name="age"
            onChange={handleInput}
            className="input-field w-full h-[50px] border-b-red border-b focus:outline-0"
          />
          {errors.age && <span className="text-red text-sm">{errors.age}</span>}
        </label>

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

        <label className="email-label flex flex-col justify-start items-start w-full">
          <p className="text-black font-bold text-sm">Password:</p>
          <input
            type="password"
            placeholder="Enter your password"
            name="password" // Corrected name attribute
            onChange={handleInput}
            className="input-field w-full h-[50px] border-b-red border-b focus:outline-0"
          />
          {errors.password && (
            <span className="text-red text-sm">{errors.password}</span>
          )}
        </label>

        <button 
        type="submit"
        className="input-field h-[50px] w-full bg-blue-700 text-white font-bold">
          Sign Up
        </button>
        <p className="notice-text text-black text-sm font-semibold text-left mr-auto">
          Already registered?
        </p>
        <Link
          to="/"
          className="input-field h-[50px] w-full bg-grey justify-center items-center flex border border-blue text-center text-black font-bold"
        >
          Sign In
        </Link>
      </form>
    </div>
  );
};

export default Signup;
