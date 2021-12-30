import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query loginQuery($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      message
    }
  }
`;
