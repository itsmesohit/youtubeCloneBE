// require('dotenv').config({path: './env'});

import dotenv from "dotenv";

import mongoose from "mongoose";
import {DB_NAME} from "./constant.js";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({path: './.env'});


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);  
    })
})
.catch((error) => {
    console.log('Error in conneting with DB', error);
    process.exit(1);
})











// ;( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            
//         });
//         console.log('Database connected');
//     } catch (error) {
//         console.log('Error:', error);
//     }
// } )();