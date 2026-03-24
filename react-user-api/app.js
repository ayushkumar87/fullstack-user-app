const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
const User=require("./models/User")
const userRoutes=require("./routes/userRoutes")

const app=express()
//middleware
app.use(cors())
app.use(express.json())

//connect db
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(()=>console.log("MongoDb connected"))
.catch((err)=>console.log(err))

//Add Sample Users
app.get("/add-dummy",async(req,res)=>{
    await User.insertMany([
        { name: "Ayush", email: "a@gmail.com", city: "Delhi", rating: 5 },
        { name: "Rahul", email: "r@gmail.com", city: "Mumbai", rating: 4 },
        { name: "Karan", email: "k@gmail.com", city: "Kolkata", rating: 3 },
        { name: "Riya", email: "riya@gmail.com", city: "Delhi", rating: 4 },
        { name: "Aman", email: "aman@gmail.com", city: "Pune", rating: 5 }
    ])
    res.send("Dummy data added")
})

//Test route
app.get("/",(req,res)=>{
    res.send("Api working")
})

app.use("/api",userRoutes)


//start Server
app.listen(5000,()=>{
    console.log("Server is running")
})