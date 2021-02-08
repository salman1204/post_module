import { useState } from "react";
import ApiRequestPost from "./ApiRequestPost";
import "./App.css";

function App() {
  const [url, setUrl] = useState();
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  let { data, isLoaded, error } = ApiRequestPost(url, auth);

  const login = () => {
    setAuth(auth);
    setUrl("http://localhost:8080/login");
    console.log(data);
  };

  return (
    <div className="m-auto login__form">
      <input
        type="text"
        placeholder="Username"
        required
        onKeyPress={(e) => e.key === "Enter" && login()}
        onChange={(e) => {
          setAuth({ ...auth, username: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="Password"
        required
        onKeyPress={(e) => e.key === "Enter" && login()}
        onChange={(e) => {
          setAuth({ ...auth, password: e.target.value });
        }}
      />
      <button className="login__btn py-2" onClick={() => login()}>
        Login
      </button>
      {/* {error !== null && (
              <p className="text-center text-danger mt-3">
                Invalid or incorrect username or password
              </p>
            )} */}
    </div>
  );
}

export default App;
