const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addCandidate = new Schema({
    cid:{
        type: String,
        required: true,
        unique: true
        
    },
    CandidateName : {
        type: String,
        required: true,
    },
    Email : {
        type: String,
        required: true,
        unique : true
    },
    Contact : {
        type: Number,
        required: true,
        unique : true
    },
    PAN : {
        type: String,
        required: true,
        unique : true
    },
    Role : {
        type: String,
        required: true
    },
    Experience : {
        type: Number,
        required: true
    },
    status : {
        type : Boolean,
        default : false,
    }
});

const counterSchema={
    id:{
        type:String
    },
    seq:{
        type:Number
    }
}

const countermodel=mongoose.model("counter",counterSchema);
const addCandid = mongoose.model('Addcandidate', addCandidate);
// module.exports = mongoose.model('Addcandidate', addCandidate);
module.exports = {countermodel,addCandid};