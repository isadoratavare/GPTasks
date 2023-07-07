import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LoginContainer from "../../components/LoginContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login() {
  return (
    <div id="main-login" className="min-h-full">
      <LoginContainer>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <Button title="Login" />

          <div className="flex flex-row justify-center items-center">
            <p className="text-gray-500 px-1 text-sm">Not a member yet? </p>
            <div className="py-2">
              <Link to="/register">
                <p className="text-blue-700 text-sm"> Sign up</p>
              </Link>
            </div>
          </div>
        </form>
      </LoginContainer>
    </div>
  );
}
