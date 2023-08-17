import React from "react";
import LoginContainer from "../../components/LoginContainer";
import "./style.css";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import { useUser } from "../../context/useUser";

export default function SignUp() {
  const { handleSignIn } = useUser();

  const [registerData, setRegisterData] = React.useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.name == "") {
      alert("Name is required");
      return;
    }
    if (registerData.lastname == "") {
      alert("Last name is required");
      return;
    }
    if (registerData.email == "") {
      alert("Email is required");
      return;
    }
    if (registerData.password == "") {
      console.log(registerData.password);
      alert("Password is required");
      return;
    }
    if (registerData.confirmPassword == "") {
      alert("Confirm password is required");
      return;
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

          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleChange}
          />
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
