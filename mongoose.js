const mongoose=require("mongoose")
const validator=require("validator")
mongoose.connect('mongodb://127.0.0.1:27017/danish')
.then(()=>
{
    console.log("1")
})
.catch((e)=>
{
    console.log(e)
})

const schema=new mongoose.Schema(
    {
        _id:
        {type:String,required:true,
            lowercase:true,unique:false},
        name:String,
        email:{type:String,validator(val){if(!validator.isEmail(val)){throw new Error("invalid")} }},
        class:Number
    }
)


// collection creation
const Proplayer=new mongoose.model("kalua",schema)

// create or insert document

const create=async()=>
{
    const react=new Proplayer
    (
        {
            _id:"PRIa",
            name:"prop",
            class:12123,
            email:"danusb@gmail.com"
        }
    )
    const result=await react.save()
    // console.log(result)
}

create()


//reading a data
// find({class:{$gt:1212}})

// const get=async()=>
// {
//     const result=await Proplayer.find().countDocuments()
//     console.log(result)
// }

// get()
  
//Updating the document
// const update=async(_id)=>
// {
// const res=await Proplayer.updateOne({_id},{$set:{name:"danishbhaiaayehai"}})
// }
// update("dnaishsasdsa12a3")

//2nd way
// const update=async(_id)=>
// {
// const res=await Proplayer.findByIdAndUpdate({_id},{$set:{name:"proop"}},{new:true})  //new ko true krne se console mai naya data print hoga
// console.log(res)
// }
// update("dnaishsasdsa12a3")

//deleting the document
// const delete=async(_id)=>
// {
// const res=await Proplayer.deleteOne({_id}})
// }
// delete("dnaishsasdsa12a3")

//2nd way
// const del=async(_id)=>
// {
// const res=await Proplayer.findByIdAndDelete({_id})  //new ko true krne se console mai naya data print hoga
// console.log(res)
// }
// del("dnaishsasdsa12a3")
