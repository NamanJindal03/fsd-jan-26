import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import fs from 'fs/promises'
import rootRoutes from "./root-routes.js"
const app = express();

const port = 4121;
//common middleware
app.use(cors()); //open to all rakha hua hai // any server can hit we can restrict it as well
app.use(cookieParser());
app.use(express.urlencoded({extended: false})) //now we are not sending the form data, json
app.use(express.json());

//router 
app.use('/', rootRoutes)




app.listen(port, () => {
    console.log('Apppppp listenting', port)
})