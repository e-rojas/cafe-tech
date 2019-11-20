import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
const NavBar = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <img
        style={{ width: "50px" }}
        className="rounded-circle img-fluid border border-dark "
        src="https://coderthemes.com/adminto/layouts/light-rtl/assets/images/users/user-1.jpg"
        alt="profile"
      />
      <Dropdown className='ml-5'>
        <Dropdown.Toggle variant="secondary" size='sm' id="dropdown-basic">
          Norwak Tom
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                  <hr/>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default NavBar;
