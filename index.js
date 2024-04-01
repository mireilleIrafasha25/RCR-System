import express from 'express'
import mongoose from 'mongoose'
import route from './routes/RCRroutes'
import bodyParser from 'body-parser'
const app=express()
app.use(express.json())// middleware for  parsing json bodies
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(route) //connecting RCR route
mongoose.connect('mongodb://localhost:27017/RCRWorkers') //
const port=6001;
app.listen(port,()=>
{
    console.log(`server is running on port ${port}`)
})
