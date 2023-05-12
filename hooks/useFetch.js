import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (url, query, params, host) => {
  const [isLoading, setLoading] = useState(true);
  const [returnedData, setData] = useState("");
  const [error, setError] = useState("");

  const fetchData = async (url, query, params, host) => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: `${url}/${query}`,
      params: params,
      headers: {
        'X-RapidAPI-Key': '91c6b6cf42mshf5f8aaa62860b8fp12f862jsnad49da89678f',
        'X-RapidAPI-Host': `${host}`
      }
    };

    try {
      console.log("FETCH CALLED");
      const response = await axios.request(options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchData(url, query, params, host)

  }, [JSON.stringify(params)]);

  const reFetch = () => {
    setLoading(true);
    fetchData(url, query, params, host);
  };

  return { isLoading, returnedData, error, reFetch };
};

export default useFetch;
