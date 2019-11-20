import React from "react";
import Card from "react-bootstrap/Card";

const individualCard = (props) => {
  return (
    <Card
      style={{
        margin: "30px",
        flexBasis: "auto",
        flexGrow: "1",
        minWidth: "18rem"
      }}
    >
      <img
        style={{ width: "50px", margin: "10px" }}
        className="rounded-circle img-fluid border border-dark "
        src="https://coderthemes.com/adminto/layouts/light-rtl/assets/images/users/user-1.jpg"
        alt="profile"
      />
      <Card.Body>
        <hr />
        <Card.Title>
                  <strong>Name:{props.name}</strong>{" "}
        </Card.Title>
        <Card.Text>
                  <strong>Email:{props.email}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default individualCard;
