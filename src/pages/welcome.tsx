import React from "react";
import { useHistory } from "react-router-dom";

const Welcome : React.FC = () => {
    const history = useHistory();
    return (<div>
        WelCome All to Photoman
        <button onClick={() => {history.push("/login");}}>
      UserLogin
    </button>
    <button onClick={() => {history.push("/login");}}>
      AdminLogin
    </button>
        </div>
)}

export default Welcome;