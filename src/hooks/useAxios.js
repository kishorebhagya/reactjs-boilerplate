import { useState, useEffect } from "react";
import { BASE_URL } from "../config/api";
import axios from "axios";

axios.defaults.baseURL = BASE_URL;

export const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 700);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { loading, response, error };
};
