import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default () => {
  const test = "";
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
              <h5>Login</h5>
            </div>
            <div className="card-body">
              <form onSubmit={test}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email..."
                    value={test}
                    onChange={test}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password..."
                    value={test}
                    onChange={test}
                  />
                </div>
                <div className="error">{test}</div>
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
