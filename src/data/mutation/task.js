import { gql } from "@apollo/client";

export const UPDATE_TASK = gql`
  mutation updateTaskFieldsBasedOnBoardId($input: UpdateTaskOnBoardInput!) {
    updateTaskFieldsBasedOnBoardId(input: $input) {
      id
      title
      description
      tasks {
        id
        title
        description
        storyPoints
        acceptanceCriteria
        label
      }
    }
  }
`;
