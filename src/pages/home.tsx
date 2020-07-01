import React from "react";
import { ImagePicker } from "react-file-picker";

const Home: React.FC = () => {
 const callAPI = (base64: any) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({ baseUrl: base64 })
};
    fetch("http://localhost:3001/uploadimage",requestOptions)
        .then(response => response.json())
        .catch(() => console.log("Can’t access response. Blocked by browser?"))
}
  return (
    <div>
      <ImagePicker
        extensions={["jpg", "jpeg", "png"]}
        dims={{ minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500 }}
        onChange={(base64: any) => callAPI(base64)}
        onError={(errMsg: any) => console.log(errMsg)}
      >
        <button>Click to upload image</button>
      </ImagePicker>
    </div>
  );
};

export default Home;
