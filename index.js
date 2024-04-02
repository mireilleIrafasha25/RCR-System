import express from 'express'
import mongoose from 'mongoose'
import route from './routes/RCRroutes'
import bodyParser from 'body-parser'
const app=express()
app.use(express.json())// middleware for  parsing json bodies
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(route) //connecting RCR route
mongoose.connect('mongodb+srv://mireilleirafasha:XmvqhluyVvA9GD7Q@cluster0.4bfpmyu.mongodb.net/RCRsystem') //
const ports=6001;
app.listen(ports,()=>
{
    console.log(`server is running on port ${port}`)
})
