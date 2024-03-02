const mongoose = require('mongoose');
const colors   = require('colors');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONOGO_URL);
        console.log(`MongoDB connect ${mongoose.connection.host}`.bgGreen.white)
    }
    catch(error){
        console.log(`Mongodb server issue ${error}`.bgRed.white)
    }
}

module.exports = connectDB;