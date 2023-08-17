import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($input: BoardQuestionInput!) {
    createBoard(input: $input) {
      id
      title
      description
      tasks {
        title
        description
        storyPoints
        acceptanceCriteria
        label
      }
    }
  }
`;
