import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors' ;

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import bookingRoute from './routes/booking.js'
import cookieParser from "cookie-parser";


dotenv.config();
const app = express();
const port = process.env.PORT;
const corsOptions ={
    origin: true,    
    credentials: true,    
}

//database connection
    
    const connect = async () => {
        try {

            await mongoose.connect(process.env.MONGO_URI,);               
            console.log("Connected to MongoDB");

        } catch (err) {
            console.log("Error connecting to MongoDB:");
        }
    };

    
//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/tours", tourRoute);
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/booking", bookingRoute);

app.listen(port, () => {
    connect();
   
})


