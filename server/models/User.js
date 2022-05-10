const {Schema, model} = require ("mongoose")
const bcrypt = require ("bcrypt")

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

userFields.pre("save", async function (next){
    if (this.isNew || this.isModified ("password")){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

userFields.methods.isCorrectedPassword = async function (password){
    return bcrypt.compare(password, this.password)
}

const User = model("User", userFields)

module.exports = User