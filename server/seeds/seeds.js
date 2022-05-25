const db = require ("../config/connection")
const carsdb = require("./cars.json")
const usersdb = require("./usersSeed.json")
const Car = require("../models/Car")
const User = require("../models/User")

db.once("open", async () => {
    try{
        await Car.deleteMany({})
        await User.deleteMany({})

        await User.create(usersdb)
        await Car.create(carsdb)
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
    console.log("Success")
    process.exit(0)
})