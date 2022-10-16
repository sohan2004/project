import express, { response } from "express"
import cors from "cors"
import mongoose from "mongoose"
import autoIncrement from'mongoose-auto-increment';
import { request } from "http";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://user:1177@ac-wewkrtu-shard-00-00.iks4y7c.mongodb.net:27017,ac-wewkrtu-shard-00-01.iks4y7c.mongodb.net:27017,ac-wewkrtu-shard-00-02.iks4y7c.mongodb.net:27017/test?ssl=true&replicaSet=atlas-4jf62n-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    id:String,
    TeamNumber:String,
    subj:String,
    pname:String,
    startdate:String,
    status1:String
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');
const User = new mongoose.model("User", userSchema)

//Routes
app.post("/add", (req, res)=> {
    const {name,id,TeamNumber,subj,pname,startdate,status1} = req.body
    User.findOne({id:id}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                id,
                TeamNumber,
                subj,
                pname,
                startdate,
                status1
           
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Created," })
                }
            })
        }
    })
    
}) 
app.get('/all',async(req, res)=>{
    const teams=await User.find({});
    res.status(200).json({teams})});
app.get('/:id',async(req,res)=>{
    const teams=await User.findById(req.params.id);
    res.status(200).json({teams})});
app.post('/:id',async(req,res)=>{
   let urs=req.body;
    const editUser =new User(urs);
    try{
        await User.updateOne({ _id: req.params.id},editUser);
        res.status(200).json(editu);
    }
    catch(error)
    {
        res.status(409).json({message: error.message});
    }
})
app.delete('/:id',async(req,res)=>{

     try{
         await User.deleteOne({ _id: req.params.id});
        res.status(200).json({message:'Deleted Sucessfully'});
     }
     catch(error)
     {
         res.status(409).json({message: error.message});
     }
 })

app.listen(1800,() => {
    console.log("Express server (Web Server) started at port 1800")
})