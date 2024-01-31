import React, { useContext, useState } from "react";
import { cartApp } from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(true);
  const {IsLoggedIn, setIsLoggedIn } = useContext(cartApp);

  function handleSubmit(e) {
    e.preventDefault();
  
    // Assuming you have a login API endpoint
    const apiUrl = "http://kareliyainfotech.com/api/login.php?email=test@gmail.com&password=123456";
    
    const requestData = {
      email: email,
      password: pass
    };
  
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsLoggedIn(true);
          alert("Login successful!");
        } else {
          alert("Login failed. Please check your email and password.");
        }
      })
      .catch(error => {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
      });
  }
  

  function showPassword() {
    setShowPass(!showPass);
  }

  return (
    <div className="container">
      <div className="row py-4">
        <h2 className="offset-5">Login</h2>
        <div className="col-md-5 offset-3 bg-light shadow p-5 rounded">
          <div className="inp mb-3">
            <input
              type="text"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your email....."
            />
          </div>
          <div className="inp mb-3 input-group">
            <input
              type={showPass ? "text" : "password"}
              value={pass}
              className="form-control"
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter Your Password...."
            />
            <span
              className={`fa-solid fa-eye${showPass ? "-slash" : ""} py-2`}
              onClick={showPassword}
            ></span>
          </div>
          <div className="bt text-center ">
            <button className="btn btn-primary w-100" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
