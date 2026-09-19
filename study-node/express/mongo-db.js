import mongoose from "mongoose";
// import {}
const mongoURL = 'mongodb://localhost/test'

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(mongoURL);
        console.log(connectionInstance.connection.host);
    }
    catch(error){
        console.log("mongodb connection error", error)
        process.exit(1)
    }
}
export default connectDB;