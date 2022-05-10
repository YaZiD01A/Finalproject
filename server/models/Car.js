const {Schema, model} = require ("mongoose")

const carFields = new Schema (
    {
        year:{
            type: String,
            required: true
        },
        
        make: {
            type: String,
            required: true
        },
        
        model:{
            type: String,
            required: true
        },
        
        price:{
            type: String,
            required: true
        }
    }
)

const Car = model("Car", carFields)

module.exports = Car