import React from 'react'
import { Link, useParams } from 'react-router-dom';


const Edit =() => {
    const {id} = useParams();



  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-5 text-center">Edit Candidate </h1>
        <div className="col-md-6 shadow mx-auto  p-5">
          <form>
          <div className="form-group mb-4">
              <input type="text" placeholder="id" className="form-control" readOnly={true} value={id} />
            </div>
            <div className="form-group mb-4">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="number"
                placeholder="Phone"
                className="form-control"
              />
            </div>
            <div className="form-group mb-4">
              <input type="text" placeholder="PAN" className="form-control" />
            </div>
            <div className="form-group mb-4">
              <input
                type="number"
                placeholder="Experience"
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <input type="submit" value="Update" className="btn btn-dark" />
              
                <Link to="/" className="btn btn-danger  mx-4">Cancel</Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit