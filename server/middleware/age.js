
function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

const ageValidation=async(req,res,next)=>{
       const age=getAge(req.body.dob);
    //    console.log(age);
       if(age>=18)
       {
          next();
       }
       else{
           res.json({message:"Age is less than 18"});
       }
};

export default ageValidation;