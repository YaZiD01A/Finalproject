const { extendSchemaImpl } = require("graphql/utilities/extendSchema")
const {Schema, model} = require ("mongoose")

const userFields = new Schema (
    {
        firstName:{
            type: String,
            required: true
        },
        
        lastName: {
            type: String,
            required: true
        },
        
        email:{
            type: String,
            required: true
        },
        
        password:{
            type: String,
            required: true
        }
    }
)