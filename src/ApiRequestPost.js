import axios from "axios";
import App from "./App";

const ApiRequestPost = (url, auth) => {
        axios
        .post(url,JSON.stringify(auth))
        .then((response) => {
          sessionStorage.setItem("authToken", response.data);
          window.location.reload(true);
        })
    };


export default ApiRequestPost;

