import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    getUsers {
      email
    }
  }
`;

export const LOGIN = gql`
  mutation loginUser($input: LoginUserInput!) {
    login(input: $input) {
      access_token
    }
  }
`;
