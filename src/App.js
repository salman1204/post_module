import { useState } from "react";
import useApiRequest from "./useApiRequest";
import "./App.css";

function App() {
  const [url,setUrl] = useState('');
  const {error, isLoaded, data} = useApiRequest(url);

  const urlPara = () => {
    setUrl ('https://jsonplaceholder.typicode.com/posts/1');
  }

  return (
    <div>
      <button onClick={()=> urlPara()}>Click Me</button>
      <button onClick={()=> console.log(data)}>data</button>
    </div>
  );
}

export default App;
