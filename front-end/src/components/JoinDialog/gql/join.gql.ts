import { gql } from "@apollo/client";

export const SINGUP_MUTATION = gql`
  mutation signUpMutaion($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, name: $name, password: $password) {
      ok
      message
      user {
        email
        name
        tag
        isActive
      }
    }
  }
`;
