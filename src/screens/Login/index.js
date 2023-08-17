import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import LoginContainer from "../../components/LoginContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useUser } from "../../context/useUser";

export default function Login() {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const { handleLogin } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.email == "" || loginData.password == "") {
      alert("Preencha todos os campos");
      return;
    }
    handleLogin(loginData.email, loginData.password);
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

          <div className="w-5">
            <Button title="Login" onPress={handleSubmit} />
          </div>

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
