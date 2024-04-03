import express from 'express'
import mongoose from 'mongoose'
import route from './routes/RCRroutes'
import bodyParser from 'body-parser'
import swaggerJSDoc from 'swagger-jsdoc'
import  SwaggerUi from 'swagger-ui-express'
const app=express()
app.use(express.json())// middleware for  parsing json bodies
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(route) //connecting RCR route
mongoose.connect('mongodb+srv://mireilleirafasha:rHoAmGXZzzA8ktU2@cluster0.4bfpmyu.mongodb.net/RCRsystem') //
const option={
    definition:{
        openai:"3.0.0",
        info:
        {
     title:"RCR Api doc",
     version:"0.1",
     description:"This is simple RCR API application made by Express and documented by Swagger",
     contact:
     {
        name:"Reached Children Rwanda",
        url:"www.rcr.com",
        email:"rcr250@gmail.com",
     },
        },
        servers:
        [
            {
            url: "http://localhost:6001/",
            },
        ],
    },
    apis:["./routes/*.jS"],
};

const spacs=swaggerJSDoc(option)
app.use("/api_docs",
SwaggerUi.serve,
SwaggerUi.setup(spacs))

const ports=6001;
app.listen(ports,()=>
{
    console.log(`server is running on port ${ports}`)
})
