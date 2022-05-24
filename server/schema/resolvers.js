const {User, Car} = require ("../models")
const {AuthenticationError} = require ("apollo-server-express")
const {signToken} = require ("../utils/auth");
const { findOne } = require("../models/User");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            
            if (context.user){
                const userData = await User.findOne ({
                    _id: context.user._id
                });
    
                return userData;
            }

            throw new AuthenticationError ("Must be logged in")
        },
        
        getCar: async (parent, args, context) => {
            
            if (context.user){
                const getCar = await Car.findOne ({
                    _id: args.carID
                });
                
                return getCar;
            }
            throw new AuthenticationError ("Must be logged in")
            
            
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
            
            if (context.user){
                const newCar = await Car.create (args)
                
                return newCar;
            }
            
            throw new AuthenticationError ("Must be logged in")
            
        },
        
        updateUser: async (parent, {info}, context) => {
            
            if (context.user){
                console.log (context.user)
                console.log (info)
                const newUser = await User.findByIdAndUpdate (context.user._id, info)
                console.log (newUser)
                return newUser;
            }
            
            throw new AuthenticationError ("Must be logged in")
            
        },
        
        deleteCar: async (parent, args, context) => {
            if (context.user){
                const deleteCar = await Car.findByIdAndDelete (args.carID)
                
                return deleteCar;
            }
            
            throw new AuthenticationError ("Must be logged in")
        },
        
        logIn: async (parent,{email, password}) => {
            console.log("working")
            console.log(args)
            const user = await User.findOne ({
                email                
            })
            if (!user){
                throw new AuthenticationError ("Wrong credentials")
            }
            const checkPass = await user.isCorrectedPassword (
                password
                )
                
                if (!checkPass){
                    throw new AuthenticationError ("Wrong credentials")
                }
                const token = signToken (user)
                return {token, user}
            }
            
        }
        
    }
    
module.exports = resolvers