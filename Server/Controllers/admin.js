const Candidate = require("../Models/addcandidate");

//ADD CANDIDATE SINGULAR
const postAddCandidade =async (req, res, next) => {
 
    const CandidateName = req.body.CandidateName;
    const Email = req.body.Email;
    const Contact = req.body.Contact;
    const PAN = req.body.PAN;
    const Role = req.body.Role;
    const Experience = req.body.Experience;
    const status = req.body.status;

    console.log(req.body)

    if(!CandidateName||!Email||!Contact||!Role||!PAN||!Experience){
      return res.status(422).json({error:"Plz filled the field property"});
    }

    const cz = await Candidate.addCandid.find();
    if (cz.find((cand) => cand.PAN === PAN)) {
        //console.log(PAN);
        return res.status(500).json({ message: "Candidate PAN already exists " });
    }
    if (cz.find((cand) => cand.Email === Email)) {
      //console.log(PAN);
      return res.status(500).json({ message: "Candidate Email already exists" });
    }
    if (cz.find((cand) => cand.Contact === Contact)) {
      //console.log(PAN);
      return res.status(500).json({ message: "Candidate Contact already exists" });
    }

    //counter
    Candidate.countermodel.findOneAndUpdate(
      {id:"val1"},
      {"$inc":{"seq":1}},
      {new:true},(err,cd)=>{

        let seqId;
        if(cd==null){
          const newval=new Candidate.countermodel({id:"val1",seq:1})
          newval.save()
          seqId=1
        }else{
          seqId=cd.seq
        }


        const data=new Candidate.addCandid({cid:"ZEN"+seqId,CandidateName:CandidateName,Email:req.body.Email,
          Contact:Contact,PAN:PAN,Role:Role,Experience:Experience,status:status
        })

        data.save().then(result => {
          console.log("Data saved");
        }).catch(err=> {
          console.log("__________________")
          //console.log(err);
          //res.status(422).json({err})
          console.log("__________________")
        })
      }
    )
    res.json({Msg:"Data saved"});
}

//ADD CANDIDATE MULTIPLE

const postMultiple=async (req,res,next)=>{

    var seqId=0;

    const cz = await Candidate.addCandid.find();

    // }
    let flag=0;
    req.body.data.map((candidate, index)=>{
      //console.log(candidate[index].Email);
      console.log("__________")
      console.log(candidate.Email)
      console.log(index);
      console.log("__________")

      if (cz.find((cand) => cand.Email === candidate.Email )) {
        //console.log(PAN);
        console.log(candidate.Email+" Exist !!")
        flag=1;
        return res.status(500).json({ message: `${candidate.Email} already exists` });
      }




    })
    //console.log("mail : "+mail);

    if(flag!=1){
    Candidate.countermodel.findOneAndUpdate(
    {id:"val1"},
    {"$inc":{"seq": req.body.data.length}},
    {new:true},(err,cd)=>{
      // let seqId;
      if(cd==null){
        const newval=new Candidate.countermodel({id:"val1",seq:req.body.data.length})
        newval.save()
        seqId=1
      }else{
        seqId=cd.seq-req.body.data.length+1;
      }

      let caninfo= req.body.data.map((candidate, index)=>{
        return {cid:"ZEN"+(index+parseInt(seqId)), ...candidate}
      })
      //console.log(caninfo);

      Candidate.addCandid.insertMany(caninfo,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("succesfully done")
            return res.json({message: "successfully submitted"})
        }
      });
    })

  }

}

const getAllCandidates = (req,res,next) => {
        Candidate.addCandid.find({}, function (err, result) {
            if (err) { console.log(err); throw err; }
            res.json(result);
        })

}




module.exports = {postAddCandidade, getAllCandidates, postMultiple};
