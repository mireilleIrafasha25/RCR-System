import express from 'express'
import mongoose from 'mongoose'
import route from './routes/RCRroutes'
import bodyParser from 'body-parser'
//import swaggerJSDoc from 'swagger-jsdoc'
import swagger from './doc/swagger.json' assert {type:'json'};
import  SwaggerUi from 'swagger-ui-express'
const app=express()
app.use(express.json())// middleware for  parsing json bodies
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(route)
 //connecting RCR route
mongoose.connect('mongodb+srv://mireilleirafasha:WHwzvlIAgHlD3Rwx@cluster0.4bfpmyu.mongodb.net/RCRsystem') //
//const spacs=swaggerJSDoc(option)
//console.log(swagger)
app.use("/api_docs",SwaggerUi.serve,SwaggerUi.setup(swagger))
const ports=6001;
app.listen(ports,()=>
{
    console.log(`server is running on port ${ports}`)
})
