import mongoose from 'mongoose'

const schema= mongoose.Schema

const RCRschema= new schema(
    {
        Name:
        {
            type:String,
            required:true
        },
        Phone:
        {
            type:String,
            required:true
        },
        Email:
        {
            type:String,
            required:true,
            unique:true
        },
        NationalID:
        {
            type:String,
            required:true,
            unique:true,
            length:16
        },
        Role:
        {
            type:String,
            required:true
        },
        Gender:
        {
            type:String,
            required:true,
            enum:
            {
                values:['Male','Female'],
                message:'Gender must be either Male or Female'
            }
        },
    },{timestamps:true}
)
const RCRmodel=mongoose.model("RCR",RCRschema)
export default RCRmodel ;