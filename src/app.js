import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";  


const app = express();

app.use(cors({  //when I have to use middleware and configuration settings then we will use app.use(cors)
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true , limit: "16kb"}))  //Rupam+sur in url shows it. for understanding the url in browser for the code line is used 
//extended in the above line is used to give objects in object

app.use(express.static("public")) //public is a name of folder   .   It is used to store files taken from use to store temporarily in server
app.use(cookieParser())



export { app }