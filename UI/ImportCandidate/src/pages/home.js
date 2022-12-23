import React from 'react'
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 my-5 text-right d-grid gap-2 d-md-flex justify-content-md-end'>
                <Link to ="/Add" className = 'btn btn-outline-primary ' >Add Candidate</Link>
                <Link to ="/Import" className = 'btn btn-outline-primary ' >Import Candidate</Link>

            </div>
            <div className=' mx-auto'>
                <h1>Candidate List</h1>
            </div>
            <div class="row">
              <table>
              <tbody>
    <tr>
      <td> <div> </div></td>
      <td>Candidate Name</td>
      <td><input type="text" placeholder="Enter Name" className="form-control" />
</td>
<td> <div> </div></td>

      <td>Email</td>
      <td><input type="text" placeholder="Enter email" className="form-control" />
</td>
    </tr>
    <tr>
    <td> <div> </div></td>

      <td >Role</td>

      <td>
         {/* <div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"> Select Role</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">TA</a></li>
                <li><a class="dropdown-item" href="#">PH</a></li>
                <li><a class="dropdown-item" href="#">Panel</a></li>
              </ul>
</div>  */}
<select class="form-select" aria-label="Default select example">
<option selected>Select Role</option>
<option value="1">TA</option>
<option value="2">PH</option>
<option value="3">Panel</option>
</select>
</td>
<td> <div> </div></td>

      <td>Status</td>
      <td> 
        {/* <div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"> Select Status</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">010 Screening</a></li>
                <li><a class="dropdown-item" href="#">020 L1TBS</a></li>
                <li><a class="dropdown-item" href="#">021 L1 Scheduled</a></li>
                <li><a class="dropdown-item" href="#">021 L1 Rejected</a></li>
                <li><a class="dropdown-item" href="#">031 L2TBS</a></li>
                <li><a class="dropdown-item" href="#">032 L2 Rejected</a></li>
                <li><a class="dropdown-item" href="#">040 HRTBS</a></li>
                <li><a class="dropdown-item" href="#">041 HR Rejected</a></li>
                <li><a class="dropdown-item" href="#">050 Offer Approval</a></li>
                <li><a class="dropdown-item" href="#">051 Offer Rejected</a></li>
                <li><a class="dropdown-item" href="#">052 Offer Released</a></li>
                <li><a class="dropdown-item" href="#">070 Joined</a></li>
                <li><a class="dropdown-item" href="#">080 Offer Backout</a></li>
                <li><a class="dropdown-item" href="#">090 Drop</a></li>
              </ul>
</div>  */}
<select class="form-select">
<option selected>Select Status</option>
<option value="1">010 Screening</option>
<option value="2">020 L1TBS</option>
<option value="3">021 L1 Scheduled</option>
<option value="4">021 L1 Rejected</option>
<option value="5">031 L2TBS</option>
<option value="6">032 L2 Rejected</option>
<option value="7">040 HRTBS</option>
<option value="8">041 HR Rejected</option>
<option value="9">050 Offer Approval</option>
<option value="10">051 Offer Rejected</option>
<option value="10">052 Offer Released</option>
<option value="10">070 Joined</option>
<option value="10">080 Offer Backout</option>
<option value="10">090 Drop</option>
</select>
</td>
    </tr>   
  </tbody>
              </table>
            </div>
            
            <div >  <button class="btn btn-primary me-md-2" type="button">Search</button>  <button class="btn btn-primary" type="button">Reset</button></div>
        </div>
    </div>
    
  )
}

export default home