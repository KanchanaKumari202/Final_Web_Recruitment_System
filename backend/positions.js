const express = require("express");
const Position = require("./models/position");
const router = express.Router();



router.post('/position', (req, res, next) => {
    console.log("check post")
    const post = new Position({
        position: req.body.title,
        jobSummery: req.body.summary,
        jobDescription: req.body.description
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: "Positions added successfully",
            postId: createdPost._id
        });
    });
});


router.get('/check', (req, res, next) => {
    // res.send("check")
    Position.find().then(documents => {
      //  console.log(documents);
        res.status(200).json({
            message: "position fetched is successfully!",
            position: documents
        });
    });
});


router.delete("/:id",(req,res,next)=>{
    // console.log(req.params.id);  // params is used to fetch encorded parameters(ex: id) from rquest from  frontend
    Position.deleteOne({_id:req.params.id})
     .then((result)=>{
      // console.log(result);  
       res.status(200).json({message:"post is deleted!"});
     });
      
   });


  
   router.put("/newpost/:id",(req,res,next)=>{
  
    const post = new Position({
        _id:req.body._id,
        position: req.body.position,
        jobSummery:req.body.jobSummery,
        jobDescription:req.body.jobDescription,
        openings:req.body.openings
    });
    console.log(post)
    
    Position.updateOne({_id:req.params.id},post).then(result=>{   // id id get from url
      console.log(result);
      res.status(200).json({message:'Update successful!'});                   
      
    });   
  });



module.exports = router;    