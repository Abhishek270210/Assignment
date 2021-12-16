import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose  from 'mongoose'
import Dataroute from './routes/Datarouter.js'

const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

const CONNECTION_URL='mongodb+srv://user101:7njo6PLoBxXeEMsb@cluster0.w8trb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Connected to the database successfully...");
});

app.get('/',(req,res)=>{
    // console.log("sending something");
    res.send("sending something");
})

app.use('/data',Dataroute);


app.listen(PORT,()=>{
    console.log("Connected to the server at port 5000...");
})