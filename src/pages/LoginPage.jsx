import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
        <img
          className="spotifyLogo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <hr /> <button className="loginButton">Log in</button>
      </div>
    </div>
  );
};

export default LoginPage;
