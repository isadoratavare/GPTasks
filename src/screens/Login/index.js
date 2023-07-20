import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

import LoginContainer from "../../components/LoginContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { useMutation } from "@apollo/client";
import { LOGIN } from "../../data/mutation/auth";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const [loginFunction] = useMutation(LOGIN);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginFunction({
      variables: {
        input: {
          email: loginData.email,
          password: loginData.password,
        },
      },
    })
      .then((token) => {
        localStorage.setItem("token", token.data.login.access_token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        navigate("/");
      });
  };
  return (
    <div id="main-login" className="min-h-full">
      <LoginContainer>
        <form className="space-y-4 md:space-y-6">
          <div>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <Button title="Login" onPress={handleSubmit} />

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
