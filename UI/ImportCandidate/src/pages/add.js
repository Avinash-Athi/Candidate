import { castDraft } from "immer";
import React, { useState } from "react";
import { FaHandRock } from "react-icons/fa";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-number-input";

const Add = () => {
  const history = useNavigate();
  const [cand, setCand] = useState({
    CandidateName:"",Email:"",Contact:"",PAN:"",Role:"",Experience:""
  });

  let name,value;

  const handleInputs=(e)=>{
    //console.log(e);
    name=e.target.name;
    //console.log(e.target.name);
    //console.log(e.target.value);
    value=e.target.value;
    setCand({...cand,[name]:value});
  }

  const postData=async (e)=>{
    e.preventDefault();

    const {CandidateName,Email,Contact,PAN,Role,Experience}=cand;

    console.log(cand);

    const res=await fetch("/addCandidate",{
      method : "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        CandidateName,Email,Contact,PAN,Role,Experience
      })
    });

    //console.log("res :"+res);

    const data=await res.json();

    console.log("data : "+JSON.stringify(data));
    //console.log("data : "+data.toString());
    //console.log("data Response: "+JSON.parse(data));
    //console.log(data.err)
    const msg=JSON.stringify(data);

    if(res.status===500||!data){
      window.alert(`Invalid Registration ${msg}`);
      console.log("Invalid Registration");
    }else if(res.status===422){
      window.alert(`Invalid Registration ${msg}`);
      console.log("Invalid Registration");
    }
    else{
      window.alert("Registration Sucessfull");
      console.log("Registration Sucessfull");
      // history.push("/addCandidate");
    }
  }
  


  return (
    <form method="POST">
    <div className="container">
     {/* <div className="row">
       <h1 className="display-3 my-5 text-center">Add Candidate</h1> */}
       <div className=' mx-auto my-auto mt-5'>
                <h1>Add Candidate</h1>
            </div>
            <div> </div>
            <div class="row">
              <table>
              <tbody>
    <tr>
      <td> <div> </div></td>
      <td>Candidate Name</td>
      <td><input type="text" name="CandidateName" placeholder="Enter Name" className="form-control" 
            value={cand.CandidateName}
            onChange={handleInputs}
            autoComplete="off"/>
</td>
<td> <div> </div></td>
<div> </div>
<td>Email</td>
      <td><div className="form-group mb-auto">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="Email"
                value={cand.Email}
                onChange={handleInputs}
                autoComplete="off"
              />
            </div>
</td></tr>
<tr>
      <td> <div> </div></td>
      <td>Contact</td>
      <td><input type="text" placeholder="Enter Phone" className="form-control" 
            name="Contact"
            value={cand.Contact}
            onChange={handleInputs}
            autoComplete="off"
            />
</td>
      
<td> <div> </div></td>
<div> </div>

<td>Role</td>
<td>
<select class="form-select" aria-label="Default select example" name="Role" value={cand.Role} onChange={handleInputs}>
<option selected>Select Role</option>
<option value="TA">TA</option>
<option value="PH">PH</option>
<option value="Panel">Panel</option>
</select>
</td>
</tr>
<tr>
      <td> <div> </div></td>
      <td>PAN</td>
      <td><input type="text" placeholder="Enter PAN" className="form-control" 
            name="PAN"
            value={cand.PAN}
            onChange={handleInputs}
            autoComplete="off"/>
</td>
<td> <div> </div></td>
<div> </div>

<td>Experience</td>
<td><input type="text" placeholder="Enter number of years" className="form-control" 
      name="Experience"
      value={cand.Experience}
      onChange={handleInputs}
      autoComplete="off"/></td>
</tr>
</tbody>
              </table>
              <div >  <button class="btn btn-primary me-2 mt-20" type="button" onClick={postData}>Submit</button>  <button class="btn btn-primary" type="button">Cancel</button></div>
        </div>
      </div>

      </form>

  );
};

export default Add;
