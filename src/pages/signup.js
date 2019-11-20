import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default () => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    passwordOne: "",
    passwordTwo: ""
  });
  const [msg, setMsg] = useState("");
  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      passwordOne: "",
      passwordTwo: ""
    });
  };

  /* //printformValues
  const printValues = e => {
    e.preventDefault();
    console.log(form.name, form.email, form.passwordOne, form.passwordTwo);
  }; */
  
  //handleFieldChange method
  const handleFieldChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  //handleSignUp method
  const handleSignUp = e => {
    e.preventDefault();
    var postData = {
      name: form.name,
      email: form.email,
      password: form.passwordOne
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .post(`https://node-server-test-er.herokuapp.com/users`, postData, axiosConfig)
      .then(res => {
        // console.log(postData)
        resetForm();
        setMsg(res.data);
        console.log('response form server=>>>>',res.data)
      })
      .catch(err => {
        setMsg(err);
        console.log("AXIOS ERROR: ", err);
      });
  };
  //input validation
  const isInvalid =
    form.passwordOne !== form.passwordTwo ||
    form.passwordOne === "" ||
    form.email === "" ||
    form.name === "" ||
    form.passwordOne.length < 8;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1572506634451-4df8fc2f1d3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
        backgroundPosition: "center",
        backgroundRepeat: "none",
        backgroundSize: "cover"
      }}
      className="container-fluid  d-flex justify-content-center align-items-center"
    >
      <div
        style={{ maxWidth: "500px", display: "flex" }}
        className="row  w-100"
      >
        <div className="col-12">
          <div className="card ">
            <div className="col p-4">
              <h5>Sign-Up | Cafe Tech </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name..."
                    value={form.name}
                    name="name"
                    onChange={handleFieldChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email..."
                    value={form.email}
                    name="email"
                    onChange={handleFieldChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password min length 8 chars"
                    value={form.passwordOne}
                    name="passwordOne"
                    onChange={handleFieldChange}
                    minLength="8"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password..."
                    value={form.passwordTwo}
                    name="passwordTwo"
                    onChange={handleFieldChange}
                  />
                </div>
                <button
                  disabled={isInvalid}
                  type="submit"
                  className="btn btn-success"
                >
                  Sign-Up
                </button>
                {msg && <p>{msg}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
