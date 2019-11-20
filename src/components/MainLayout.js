import React from "react";
import Card from "./individualCard";
const MainLayout = (props) => {
    const userCards = props.userData.map((user,index) => {
        return (
            <Card key={index} id={user.id} name={user.name} email={user.email} />
        )
    })


  return (
    <div className="container-fluid pt-5 pb-5 bg-info">
      <div
        style={{ display: "flex", alignContent: "space-evenly" }}
        className="row " >
             {userCards}
       
      </div>
    </div>
  );
};

export default MainLayout;
