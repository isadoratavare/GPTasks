import React from "react";
import LoginContainer from "../../components/LoginContainer";
import "./style.css";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div id="main-register" className="min-h-full">
      <LoginContainer>
        <form className="space-y-4 md:space-y-6 bg-white-100" action="#">
          <div className="flex flex-row">
            <div className="px-2">
              <Input type="nome" name="nome" id="nome" placeholder="Nome" />
            </div>
            <div className="px-2">
              <Input
                type="sobrenome"
                name="sobrenome"
                id="sobrenome"
                placeholder="Sobrenome"
              />
            </div>
          </div>

          <div className="px-2">
            <Input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="px-2">
            <Input
              type="password"
              name="password-register"
              id="password-register"
              placeholder="Senha"
            />
          </div>
          <div className="px-2">
            <Input
              type="password"
              name="confirm-password-register"
              id="confirm-password-register"
              placeholder="Confirme a senha"
            />
          </div>
          <Button title="Cadastrar" />

          <div className="flex flex-row justify-center items-center">
            <p className="text-gray-500 px-1 text-sm">Já possui uma conta? </p>
            <div className="py-2">
              <Link to="/login">
                <p className="text-blue-700 text-sm"> Faça seu login</p>
              </Link>
            </div>
          </div>
        </form>
      </LoginContainer>
    </div>
  );
}
