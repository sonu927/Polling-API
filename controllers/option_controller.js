const Question = require('../models/question');
const Option = require('../models/option');

//To create a option and add it to question
module.exports.createOption = async function(req,res){
    try{
        const question = await Question.findById(req.params.id);

        const option = await Option.create({
            text: req.body.text
        });

        option.link_to_vote = `http://localhost:5000/api/v1/option/${option.id}/add_vote`;
        option.save();

        question.options.push(option);
        question.save();

        return res.status(200).json({
            message: "Option created successfully",
            Option: option
        });
    }catch(err){
        console.error("Error in creating a Option:",err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

//To delete a option
module.exports.deleteOption = async function(req,res){
    try{
        const option = await Option.findById(req.params.id);
        option.deleteOne();

        return res.status(200).json({
            message: "Option Deleted successfully",
            Option: option
        });
    }catch(err){
        console.error("Error in deleting a option:",err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

//To add vote to a option
module.exports.addVote = async function(req,res){
    try{
        const option = await Option.findById(req.params.id);
        let vote_count = option.votes;
        vote_count = vote_count+1;
        option.votes = vote_count;
        option.save();

        return res.status(200).json({
            message: "Vote Added successfully",
            Option: option
        });
    }catch(err){
        console.error("Error in finding option:",err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}