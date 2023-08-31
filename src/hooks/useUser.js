import { useMutation } from "@apollo/client";
import { createContext, useContext, useState } from "react";
import { LOGIN, REGISTER } from "../data/mutation/auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [emailUser, setEmailUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loginFunction] = useMutation(LOGIN);
  const [registerFunction] = useMutation(REGISTER);
  const handleLogin = (email, password) => {
    loginFunction({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    })
      .then((token) => {
        localStorage.setItem("token", token.data.login.access_token);
        localStorage.setItem("email", email);
        setToken(token.data.login.access_token);
        setEmailUser(email);
        setIsAuth(true);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleSignIn = (name, lastname, email, password) => {
    registerFunction({
      variables: {
        input: {
          preferredName: name + " " + lastname,
          email: email,
          password: password,
        },
      },
    })
      .then(() => {
        alert("User created successfully");
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        isAuth,
        setIsAuth,
        emailUser,
        setEmailUser,

        handleLogin,
        handleSignIn,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
