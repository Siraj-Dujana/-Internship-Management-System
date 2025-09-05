const mongoose=require('mongoose')

const internschema=new mongoose.Schema({
    name:String,
    email:String,
    role:String,
    performance:{type:Number,default:0}
})

module.exports=mongoose.model('Intern',internschema)
