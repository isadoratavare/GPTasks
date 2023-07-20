import React from "react";
import LoginContainer from "../../components/LoginContainer";
import "./style.css";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { REGISTER } from "../../data/mutation/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = React.useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerFunction] = useMutation(REGISTER, {
    variables: {
      input: {
        preferredName: registerData.name + " " + registerData.lastname,
        email: registerData.email,
        password: registerData.password,
      },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    registerFunction()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="main-register" className="min-h-full">
      <LoginContainer>
        <form className="space-y-4 md:space-y-6 bg-white-100" action="#">
          <div className="flex flex-row ">
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="First Name"
              onChange={handleChange}
            />
            <Input
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <Input type="email" name="email" id="email" placeholder="Email" />
          <Input
            type="password"
            name="password-register"
            id="password-register"
            placeholder="Password"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirm-password-register"
            id="confirm-password-register"
            placeholder="Confirm your password"
            onChange={handleChange}
          />
          <Button title="Sign up" onClick={handleSubmit} />

          <div className="flex flex-row justify-center items-center">
            <p className="text-gray-500 px-1 text-sm">Already have account? </p>
            <div className="py-2">
              <Link to="/login">
                <p className="text-blue-700 text-sm"> Log in</p>
              </Link>
            </div>
          </div>
        </form>
      </LoginContainer>
    </div>
  );
}
