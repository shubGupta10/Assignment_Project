import mongoose from "mongoose";


const connect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGOURL}`)
        console.log("Database connected Successfully");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

export default connect;