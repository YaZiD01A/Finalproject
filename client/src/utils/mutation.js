import { gql } from "@apollo/client";
export const SIGN_IN = gql `
mutation LoginUser($password: String, $email: String) {
    logIn(password: $password, email: $email) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
  `