import { gql } from "@apollo/client";

export const GETCAR = gql`
query GetCar($year: String) {
    getCar(year: $year) {
      _id
      year
      make
      model
      price
    }
  }`