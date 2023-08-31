import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { UserProvider } from "./hooks/useUser";
import { TaskProvider } from "./hooks/useTask";

const client = new ApolloClient({
  uri: "http://localhost:3333/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>
);
