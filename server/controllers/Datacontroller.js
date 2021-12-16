import Datamodel from "../models/Datamodel.js";

export const getData=async (req,res)=>{
    console.log("get method called");
    try {
        const alldata=await Datamodel.find();
    // console.log(alldata);
    res.send(alldata);   
    } catch (error) {
        console.log("error occured",error);
    }
}

export const getFilteredData=async(req,res)=>{
     const {city}=req.body;
     try {
         if(city==="ALL")
         {
            const alldata=await Datamodel.find();
            res.send(alldata);  
         }
         else{
        const dataAfterFilter=await Datamodel.find({city});
        // console.log(dataAfterFilter);
        res.send(dataAfterFilter);
         }
     } catch (error) {
         console.log("error occured", error);
     }
}

export const postData=async(req,res)=>{
       const newData=req.body;
    //    console.log(newData);
        newData.city=newData.city.toUpperCase();
       const addedData=await new Datamodel(newData);
      try {
        //   console.log("before");
          await addedData.save();
        //   console.log("successfully saved");
          res.send({message:"Added successfully"});
      } catch (error) {
          console.log("error occured ",error);
      }
}