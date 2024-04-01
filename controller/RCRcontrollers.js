import RCRmodel from "../Models/RCRmodel.js"

const RCRcontroller=
{
create:async(req,res)=>
{
    const addedworker= await RCRmodel.create(req.body)
try{
    res.status(201).json(
        {
            message:'Worker added successfully',
            RCR:addedworker
        }
    )}
catch(error)
    {
        console.log(error.message)
     res.status(500).json (
        {
            message:"Internal Server error"
        }
     )}
},
list:async(req,res)=>
{
    const allworker=await RCRmodel.find()
    try{

        res.status(200).json(
            {
                RCR:allworker
            }
        )
    }
    catch(error)
    {
        console.log(error.message)
        res.status(500).json(
            {
                message:'Internal server Error'
            }
        )
    }
},
RetrievedById:async(req,res)=>
{
const id=req.params.id
const worker=await RCRmodel.findById(id)
try{
    res.status(200).json(worker)
}
catch(error)
{
    console.log(error.message)
    res.status(404).json(
        {
            message:'Internal server error'
        }
    )
}
},
update:async(req,res)=>
{
    const id=req.params.id
    const updatedworker=await RCRmodel.findByIdAndUpdate(id,req.body,{set:true})
    try{
        res.status(200).json(
            {
                message:'Worker added succesfully',
                RCR:updatedworker
            }
        )
    }
    catch(error)
    {
        console.log(error.message)
        res.status(500).json(
            {
                message:'Internal server error'
            }
        )
    }
},
deleteWorker:async(req,res)=>
{
const id=req.params.id
const removedworker=await RCRmodel.findByIdAndDelete(id)
try{
    res.status(200).json(
        {
            message:'worker deleted successfully',
            RCR:removedworker
        }
    )
}
catch(error)
{
    console.log(error.message)
    res.status(500).json(
        {
            message:'Internal server error'
        }
    )
}
}
}
export default RCRcontroller;