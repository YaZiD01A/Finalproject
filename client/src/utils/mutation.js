import { gql } from "@apollo/client";
export const SIGN_IN = gql `
mutation LogIn($email: String, $password: String) {
  logIn(email: $email, password: $password) {
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