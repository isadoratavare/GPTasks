import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser($input: LoginUserInput!) {
    login(input: $input) {
      access_token
    }
  }
`;

export const REGISTER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      email
    }
  }
`;
