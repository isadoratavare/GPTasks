import React, { useEffect } from "react";
import LoginContainer from "../../components/LoginContainer";
import "./style.css";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import { useUser } from "../../hooks/useUser";

export default function SignUp() {
  const { handleSignIn } = useUser();

  const [registerData, setRegisterData] = React.useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorInput, setErrorInput] = React.useState({
    name: false,
    nameErrorMessage: "",
    lastname: false,
    lastnameErrorMessage: "",
    email: false,
    emailErrorMessage: "",
    password: false,
    passwordErrorMessage: "",
    confirmPassword: false,
    confirmPasswordErrorMessage: "",
  });

  useEffect(() => {
    if (registerData.name != "") {
      setErrorInput((prevState) => ({
        ...prevState,
        name: false,
        nameErrorMessage: "",
      }));
    }
    if (registerData.lastname != "") {
      setErrorInput((prevState) => ({
        ...prevState,
        lastname: false,
        lastnameErrorMessage: "",
      }));
    }
    if (registerData.email != "") {
      setErrorInput((prevState) => ({
        ...prevState,
        email: false,
        emailErrorMessage: "",
      }));
    }
    if (registerData.password != "") {
      setErrorInput((prevState) => ({
        ...prevState,
        password: false,
        passwordErrorMessage: "",
      }));
    }
    if (registerData.confirmPassword != "") {
      setErrorInput((prevState) => ({
        ...prevState,
        confirmPassword: false,
        confirmPasswordErrorMessage: "",
      }));
    }
  }, [registerData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.name == "") {
      setErrorInput((prevState) => ({
        ...prevState,
        name: true,
        nameErrorMessage: "Name is required",
      }));
    }
    if (registerData.lastname == "") {
      setErrorInput((prevState) => ({
        ...prevState,
        lastname: true,
        lastnameErrorMessage: "Lastname is required",
      }));
    }
    if (registerData.email == "") {
      setErrorInput((prevState) => ({
        ...prevState,
        email: true,
        emailErrorMessage: "Email is required",
      }));
    }
    if (registerData.password == "") {
      setErrorInput((prevState) => ({
        ...prevState,
        password: true,
        passwordErrorMessage: "Password is required",
      }));
    }
    if (registerData.confirmPassword == "") {
      setErrorInput((prevState) => ({
        ...prevState,
        confirmPassword: true,
        confirmPasswordErrorMessage: "Confirm password is required",
      }));
    }

    handleSignIn(
      registerData.name,
      registerData.lastname,
      registerData.email,
      registerData.password
    );
  };

  return (
    <div id="main-register" className="min-h-full">
      <LoginContainer>
        <form className="space-y-4 md:space-y-6 bg-white-100">
          <div className="md:flex md:flex-row justify-between ">
            <div>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                onChange={handleChange}
                error={errorInput.name}
                errorMessage={errorInput.nameErrorMessage}
              />
            </div>
            <div>
              <Input
                type="lastname"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                onChange={handleChange}
                error={errorInput.lastname}
                errorMessage={errorInput.lastnameErrorMessage}
              />
            </div>
          </div>

          <div>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              error={errorInput.email}
              errorMessage={errorInput.emailErrorMessage}
            />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              error={errorInput.password}
              errorMessage={errorInput.passwordErrorMessage}
            />
          </div>
          <div>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              error={errorInput.confirmPassword}
              errorMessage={errorInput.confirmPasswordErrorMessage}
            />
          </div>
          <Button title="Sign up" onPress={handleSubmit} />

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
