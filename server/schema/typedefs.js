const {gql} = require ("apollo-server-express")
const typeDefs = gql`
type Query {
    me: User
    getCar (carID: String): Car
    getAllCar:[Car]
    getAllUsers:[User]

}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
}

type Car {
    _id: ID
    year: String
    make: String
    model: String
    price: String
}

input userInfo {
    firstName: String
    lastName: String
    email: String
    password: String
}

type Auth{
    token: ID
    user: User
}

type Mutation {
    createUser (firstName: String, lastName: String, email: String, password: String): Auth
    createCar (year: String, make: String, model: String, price: String): Car
    updateUser (info: userInfo): User
    deleteCar (carID: String): Car
    logIn (email: String, password: String): Auth
}
`;

module.exports = typeDefs