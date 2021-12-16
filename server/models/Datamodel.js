import mongoose from 'mongoose'

const dataSchema=new mongoose.Schema({
    name:String,
    city:String,
    dob:String,
});

const Datamodel=mongoose.model('information',dataSchema);

export default Datamodel;