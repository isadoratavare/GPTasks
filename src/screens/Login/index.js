import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="main-login" className="min-h-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0  ">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-10 form-container">
          <div className="flex flex-col items-center">
            <img
              className="h-auto max-w-xs rounded-sm"
              src={require("../../assets/images/logo.svg").default}
              alt="Logo"
            />
          </div>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-slate-100 
                    border-solid border-1 border-slate-300
                    text-gray-900 
                    sm:text-sm 
                    rounded-lg 
                    focus:ring-primary-600 
                    focus:border-primary-600 
                    block 
                    w-full 
                    p-2.5
                    "
                  placeholder="Email"
                  required=""
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-slate-100 
                    border-solid border-1 border-slate-300
                    text-gray-900 
                    sm:text-sm 
                    rounded-lg 
                    focus:ring-primary-600 
                    focus:border-primary-600 
                    block
                    w-full 
                    p-2.5 "
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full 
                  text-white-100 
                  bg-blue-700
                  hover:bg-blue-800 
                  focus:ring-4 
                  focus:outline-none 
                  focus:ring-primary-300 
                  font-medium rounded-lg 
                  text-sm 
                  px-5 
                  py-2.5 
                  text-center
                  "
              >
                Sign in
              </button>

              <div className="flex flex-row justify-center items-center">
                <p
                  className="text-gray-500 px-1 
                  "
                >
                  Not a member yet?{" "}
                </p>
                <div className="py-2">
                  <Link to="/register">
                    <p className="text-blue-700"> Sign up</p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
