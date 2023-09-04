import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser($input: LoginUserInput!) {
    login(input: $input) {
      access_token
    }
  }
`;

export const REGISTER = gql`
  mutation signUp($input: CreateUserInput!) {
    signUp(input: $input) {
      email
    }
  }
`;
