import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [option, setOption] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [rePassword, setRepassword] = useState(" ");
  const [mobile, SetMobile] = useState("");
  const handleFname = (e) => {
    setFname(e.target.value);
  }

  const handleLname = (e) => {
    setLname(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleOption = (e) => {
    setOption(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleRepassword = (e) => {
    setRepassword(e.target.value);
  }
  const handleMobile = (e) => {
    SetMobile(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();



    axios.post('https://a2zbe.cleverapps.io/api/register', {

      "first_name": fname,
      "last_name": lname,
      "email": email,
      "mobile": Number(mobile),
      "role": option,
      "password": password

    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div>
      {console.log(rePassword)}
      <div className="back">
        <div className="div-center">
          <div className="content">
            <h3>Signup</h3>
            <hr />
            <form >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="First Name" onChange={handleFname}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Last Name" onChange={handleLname}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" onChange={handleEmail}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                <input type="tel" className="form-control" id="exampleInputEmail1" placeholder="Mobile Number" onChange={handleMobile}  />
              </div>
              <div className="form-group">
                <label htmlFor="sel1">Select list (select one):</label>
                <select className="form-control" id="sel1" onChange={handleOption}>
                  <option>User</option>
                  <option>Admin</option>
                  <option>Super Admin</option>

                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePassword}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleRepassword}  />
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Signup</button>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;