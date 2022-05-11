const {User, Car} = require ("../models")
const {AuthenticationError} = require ("apollo-server-express")

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            const userData = await User.findOne ({
                _id: context.User._id
            });

            return userData;

        },

        getAllUsers: async (parent,args, context) => {
            const allUserData = await User.find ();

            return allUserData;
        }

    }

    Mutation: {
        createUser
    }

}

module.exports = resolvers