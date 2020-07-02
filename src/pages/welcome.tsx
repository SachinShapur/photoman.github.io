import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./style.css";
const Welcome: React.FC = () => {
  const history = useHistory();
  return (
    <div className="conatiner">
      <img
        src="https://images.unsplash.com/photo-1585968835308-76c8a520f05f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="anv"
        width="70%"
        height="650px"
      ></img>
      <div className="leftcontainer">
        <div className="image">
         <img
        src={require("./logo.png")}
        alt="anv"
        width="100%"
        height="200px"
      ></img>
      </div>
        <div className="buttonwrapper">
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            history.push("/login");
          }}
          className="login"
        >
          UserLogin
        </Button>
        <div className="adminlogin">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/login");
          }}
          className="login"
        >
          AdminLogin
        </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
