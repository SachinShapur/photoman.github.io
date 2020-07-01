import React from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import "../App.css"
const Login: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <div>LOGIN PAGE</div>
      <div className="login">
      <TextField
        id="standard-userName"
        label="UserName"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <TextField
        id="standard-password"
        label="Password"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
</div>
      <button
        onClick={() => {
          history.push("/home");
        }}
      >
        LOGIN
      </button>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        CANCEL
      </button>
    </div>
  );
};

export default Login;
