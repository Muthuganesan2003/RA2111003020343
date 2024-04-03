import express from "express";
import bodyParser from "body-parser";
import numberRouter from "./routers/numbersRouters.js";
const expressApp = express();
expressApp.use(express.json());
expressApp.use(express.urlencoded({extended:true}));
expressApp.use("/",numberRouter);
expressApp.listen(5000,()=>{
    console.log("App is listening to the port 5000");
})