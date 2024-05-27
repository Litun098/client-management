const mongose = require('mongodb');
const { default: mongoose } = require('mongoose');

const connectDB = async()=>{
    const connect = await mongoose.connect((process.env.MONGODB_URL))
    console.log(`MongoDB connected ${connect.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB