const Question = require('../models/question');

//To create a new question
module.exports.create = async function(req,res){
    try{
        const question = await Question.create({
            title: req.body.title
        });
    
        return res.status(200).json({
            message: "Question created successfully",
            Question: question
        });
    }catch(err){
        console.error("Error in creating a question",err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

//To delete a Question
module.exports.delete = async function(req,res){
    try{
        const question = await Question.findById(req.params.id);
        question.deleteOne();

        return res.status(200).json({
            message: "Question Deleted successfully",
            Question: question
        });
    }catch(err){
        console.error("Error in deleting a question",err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

//to view a question
module.exports.view = async function(req,res){
    try{
        const question = await Question.findById(req.params.id)
        .populate('options');

        return res.status(200).json({
            message: "Question Found successfully",
            Question: question
        });
    }catch(err){
        console.error("Error in finding the question",err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}