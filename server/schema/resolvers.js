const {User, Car} = require ("../models")
const {AuthenticationError} = require ("apollo-server-express")
const {signToken} = require ("../utils/auth")

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            const userData = await User.findOne ({
                _id: context.user._id
            });

            return userData;

        },

        getCar: async (parent, args, context) => {
            const getCar = await Car.findOne ({
                _id: args.carID
            });

            return getCar;

        },

        getAllCar: async (parent, args, context) => {
            const getAllCar = await Car.find ();

            return getAllCar;

        },

        getAllUsers: async (parent,args, context) => {
            const allUserData = await User.find ();

            return allUserData;
        }

    },

    Mutation: {
        createUser: async (parent, args, context) => {
        
            const user = await User.create (args)
            const token = signToken (user)
            return {token, user}
        },

        createCar: async (parent, args, context) => {
            const newCar = await Car.create (args)

            return newCar;
        },

        updateUser: async (parent, {info}, context) => {
            const newUser = await User.updateOne ({_id: context.user._id}, info)

            return newUser;
        },

        deleteCar: async (parent, args, context) => {
            const deleteCar = await Car.deleteOne ({_id: args.carID})
            
            return deleteCar;
        }

    }

}

module.exports = resolvers