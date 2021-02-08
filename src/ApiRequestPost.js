import { useState, useEffect } from "react";
import axios from "axios";

const ApiRequestPost = (url, auth) => {
  const [data, setData] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    const postData = () => {
        axios
        .post(url,JSON.stringify(auth))
        .then((response) => {
          setIsLoaded(true);
          setData(response.data);
          sessionStorage('authToken', data);
        })
        .catch((error) => {
         setError(error)
        });
    };
    postData();
  }, [url]);
  return { data, isLoaded, error };
};

export default ApiRequestPost;