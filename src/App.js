import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navBar";
import Main from "./components/MainLayout";
import axios from "axios";
function App() {
  const[userData,setUserData]=useState([])
  //Request all users.
  const users = () => {
    axios
      .get(`https://node-server-test-er.herokuapp.com/users`)
      .then(res => {
        setUserData(res.data)
       
      })
      .catch(err => {
        console.log("Axios-request Error", err);
      });
  };
  //users UseEffect.
  useEffect(() => {
    users();
  }, []);

  return (
    <div
      style={{ minHeight: "100vh", padding: "0px" }}
      className="container-fluid bg-warning"
    >
      <Navbar />
      <Main userData={userData} />
    </div>
  );
}

export default App;
