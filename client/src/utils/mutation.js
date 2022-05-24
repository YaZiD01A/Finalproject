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

export const SIGN_UP = gql `
mutation CreateUser($firstName: String, $lastName: String, $email: String, $password: String) {
  createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    user {
      email
      lastName
      firstName
      _id
    }
    token
  }
}
`