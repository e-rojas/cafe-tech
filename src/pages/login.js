import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

export default () => {
  const [form, setValues] = useState({
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  const resetForm = () => {
    setValues({
      email: "",
      password: ""
    });
  };

  // const printValues = e => {
  //   e.preventDefault();
  //   console.log(form.email, form.password);
  //   resetForm()
  // };

  const handleFieldChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    const postData = {
      email: form.email,
      password: form.password
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .post("https://node-server-test-er.herokuapp.com/users/login", postData, axiosConfig)
      .then(res => {
        setMsg(res.data.message);
        localStorage.setItem("token", res.data.token);
        resetForm();
        // console.log("response from server>>>", res.data);
      })
      .catch(err => {
       // setMsg(err);
        console.log("AXIOS ERROR:", err);
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1438804339156-c72cb5183686?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80)",
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
              <h5>Login | Cafe Tech </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
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
                    placeholder="Password..."
                    value={form.password}
                    name="password"
                    onChange={handleFieldChange}
                    minLength="8"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success">
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
