import Feedback from "../models/Feedback.js";
import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";
const PostFeedback = async(req,res,next)=>{



try{
    const Patient = req.body.patientInfo;
    const Votes = req.body.Vote;
    console.log(Votes);
    console.log(req.body);
    
const feedback = new Feedback({
Patient:req.body.Patient,
Doctor:req.body.DrName,
Feedback:req.body.Feedback
});

const Newdoctor = await Doctor.findByIdAndUpdate(req.body.DoctorID,{
    $inc:{
        Upvotes:Votes
    }
})
   
// console.log(Newdoctor);



const SavedFeedback = await feedback.save();
res.status(200).json(SavedFeedback);

console.log(SavedFeedback);


}
catch(err){
    throw err;
}

}

const getFeedback = async(req,res,next)=>{

    try{
const Feedbacks = await Feedback.find();

res.status(200).json(Feedbacks);
    }
    catch(err){
        throw err;
    }



}

// const UpdateUpvotes = async(req,res,next)=>{

//     try{

//       const Votes = req.body.Vote;
//       console.log(Votes);
      


//         const Newdoctor = await Doctor.findByIdAndUpdate(req.params.id,{
//             $inc:{
//                 Upvotes:Votes
//             }
//         })
           
//        res.status(200).json(Newdoctor);
        
//     }

//     catch(err){

//     console.log(err);

//     }

   
    

// }

export default {PostFeedback,getFeedback};