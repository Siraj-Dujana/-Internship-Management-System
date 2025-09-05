const express=require('express')
const app=express()
const mongoose=require('mongoose')


app.use(express.urlencoded({extended:true}))
app.use(express.json())


let port=3000

app.listen(port,()=>{
    console.log(`Listening to ${port} port`)
})


main()
.then(()=> console.log("Successfull connection"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/internship');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




// Interns 

const internsch=require('./model/internmodel')

// Get all interns
app.get('/interns',async (req,res)=>{
    let interns=await internsch.find();
    res.json(interns)
})

// Add intern
app.post('/interns',async(req,res)=>{
    // let {name,email,role,performance}=req.body;
    let interns=await internsch.insertOne({
        name:"Dujana",
        email:"dujanadujana@gmail.com",
        role:"FrontEnd Developer",
    });
    
    res.json(interns)
})

app.get('/interns/:id',async(req,res)=>{
    
})

// Update intern
app.put('/interns/:id',async(req,res)=>{
    let {id}=req.params;
   let intern= await internsch.findByIdAndUpdate({_id:id},{
        performance:80
    })
    res.json(intern)
    
})

// Delete Intern
app.delete('/interns/:id',async(req,res)=>{
    let {id}=req.params;
   let intern= await internsch.findOneAndDelete({_id:id})
    res.json(intern)
})


// Tasks
const tasksch=require('./model/taskmodel')
// get all the tasks
app.get('/tasks',async(req,res)=>{
    const tasks = await tasksch.find().populate("assignedTo");
    res.json(tasks)
    
})
// get specified task
app.get('/tasks/:id',async(req,res)=>{
    let {id}=req.params;
    const tasks = await tasksch.find({assignedTo:id}).populate("assignedTo");
    res.json(tasks)
    
})

// add task
app.post('/tasks/:id',async(req,res)=>{
    let {id}=req.params;
    let interns=await internsch.findOne({_id:id});
    let task=await tasksch.insertOne(
        {
        title: "Build Crud Operations",
  description: "using node and express js + react js",
  assignedTo: interns._id   
    }) 
    const tasks = await tasksch.find();
    res.json(tasks)
})

// update task
app.put('/tasks/:id',async(req,res)=>{
    console.log('update request recieved')
    let {id}=req.params;
    await tasksch.findByIdAndUpdate({_id:id},{
        status:"completed"
    })
    
})



// delete Task
app.delete('/tasks/:id',async(req,res)=>{
    console.log("request recieved")
    let {id}=req.params
    await tasksch.findByIdAndDelete({_id:id})
})
