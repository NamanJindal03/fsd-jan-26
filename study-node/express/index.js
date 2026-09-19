import express from "express";
import connectDB from "./mongo-db.js";

import { createUser } from "./controller/user-controller.js";
import { signup, login, randomData } from "./controller/auth-controller.js";
import { JWTCheck } from "./middleware/auth.middleware.js";
import rateLimit from "express-rate-limit";


const app = express();

app.use(express.json());
app.use(
    rateLimit({
        windowMs: 60 * 1000,
        max: 5,
        message: 'too many request try after some time'
    }) 
)

app.get('/', createUser)

app.post('/signup', signup)
app.get('/login', login)
app.get('/random-data', randomData)

async function fetchPaginatedUsers(page=4, pageSize=10){
    try{
        const users = await User.find({})
                        .skip((page - 1) * pageSize)
                        .limit(pageSize)
                        .exec()
    }
    catch{

    }
}


connectDB()
    .then(()=>{
        console.log('database started')
        app.listen(process.env.PORT, ()=>{
            console.log('server started', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log("Db connection failed", error)
    })