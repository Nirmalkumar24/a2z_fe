import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { login } from "../utils/Auth";
import { useState } from "react/cjs/react.development";
import axios from "axios";

function Login() {

  const [email, SetEmail] = useState(" ");
  const [password, SetPassword] = useState(" ");
  const [option, setOption] = useState("user");

  const history = useHistory();
  const handlenEmail = (e) => {

    SetEmail(e.target.value);
    e.preventDefault();

  }
  const handlePassword = (e) => {
    SetPassword(e.target.value);
    e.preventDefault();

  }
  const handleOption = (e) => {
    e.preventDefault();
    let temp = e.target.value;
    setOption(temp.toLowerCase());

  }

  const handleLogin = async (e) => {

    e.preventDefault();

    /*try {
      axios.post('https://a2zbe.cleverapps.io/api/login', {

        "email": email,
        "role": option,
        "password": password


      })
        .then(await function (response) {
          console.log(response.statusText);
          if (response.statusText === "OK") {
            login();

            history.push("/");
            window.location.reload();
          }

        })
        .catch(await function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }*/

    login();

    history.push("/");
    window.location.reload();

  }


  return (
    <div>

      <div className="back">
        <div className="div-center">
          <div className="content">
            <h3>Login</h3>
            <hr />
            
            <form className="was-validated" novalidate>
              <div className="form-group has-success has-feedback">

                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control " id="exampleInputEmail1" placeholder="Email" onChange={handlenEmail} required />
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>

              <div class="form-group">
                <label for="validationServer04">Select list (select one):</label>
                <select class="custom-select is-invalid" id="validationServer04" onChange={handleOption} required>
                  <option selected disabled value="">Choose...</option>
                  <option >User</option>
                  <option>Admin</option>
                  <option>Super Admin</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePassword} required />
                <div class="invalid-feedback">Check this checkbox to continue.</div>
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
              <hr />
              <span>Don't have an account?</span>
              <Link to="/signup" >
                <button type="button" className="btn btn-link">Signup</button>
              </Link>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;